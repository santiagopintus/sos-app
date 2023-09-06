import { View, ViewStyle } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native-paper";
import Button from "../components/Button";
import globalStyles from "../styles/global/globalStyles";
import { useContext, useEffect, useState } from "react";
import utils from "../styles/global/utils";
import form from "../styles/layout/form";
import { MainContext, Resource } from "../context/MainContext";
import { ContactType } from "../context/ContactsContext";
import ContactPicker from "../components/ContactPicker";

const NewResourceScreen = ({ navigation }) => {
  /* CONTEXT */
  const mainContext = useContext(MainContext);
  const [title, setTitle] = useState<string | null>(null);
  const [type, setType] = useState<string | null>("cita");
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [contact, setContact] = useState<ContactType | null>(null);
  const [textContent, setTextContent] = useState<string | null>(null);
  const [href, setHref] = useState<string | null>(null);
  const [resource, setResource] = useState<Resource>();
  // const [savingResource, setSavingResource] = useState<{} | null>(null);

  const handleSave = () => {
    if (type === null) return;

    switch (type) {
      case "contact":
        if (contact !== null) saveContact();
        break;
      default:
        saveGeneric();
    }
  };

  const saveContact = () => {
    //Message with red flag
    setHref(
      `https://api.whatsapp.com/send?phone=${sanitizeNumber(
        contact.phoneNumbers[0].number
      )}&text=Hola!%20C%C3%B3mo%20est%C3%A1s%3F%20%F0%9F%9A%A9`
    );
    setTitle(`${contact.firstName} ${contact.lastName}`);
  };

  const sanitizeNumber = (telNum: string) => {
    return telNum.replace(/[^\d]/g, ""); //Remove non digit characters
  };

  const saveGeneric = () => {
    setResource({
      title,
      href,
      textContent,
      type,
      imgSrc,
    });
  };

  /* On Resource change save to DB */
  useEffect(() => {
    if (Object.keys(resource).length > 0) {
      mainContext.addResource(resource);
    }
  }, [resource]);

  return (
    <View style={[globalStyles.app as ViewStyle, utils.container]}>
      <Picker
        selectedValue={type}
        onValueChange={(val, i) => setType(val)}
        style={form.picker}
      >
        <Picker.Item label="Foto" value="foto" />
        <Picker.Item label="Cita" value="cita" />
        <Picker.Item label="Contacto" value="contacto" />
        <Picker.Item label="Link externo" value="link" />
      </Picker>

      {/* IF TYPE CONTACTO LABEL IS "NOMBRE" */}
      <TextInput
        style={form.input}
        autoFocus={true}
        label={type === "contacto" ? "Nombre del contacto" : "Título"}
        placeholder={type === "contacto" ? "Nombre del contacto" : "Título"}
        onChangeText={(title) => setTitle(title)}
      />

      {type === "contacto" && <ContactPicker onContactSelect={setContact} />}
      {type === "foto" && (
        <TextInput
          style={form.input}
          label={"URL de la Imagen"}
          placeholder={"Imagen del recurso"}
          onChangeText={(text) => setImgSrc(text)}
        />
      )}

      {type === "cita" && (
        <TextInput
          style={form.textArea}
          label={"Texto de la cita"}
          placeholder={"Texto de la cita"}
          onChangeText={(text) => setTextContent(text)}
        />
      )}

      {type === "cita" ||
        (type === "link" && (
          <TextInput
            style={form.input}
            label={"Link (opcional)"}
            placeholder={"Link del recurso"}
            onChangeText={(text) => setHref(text)}
          />
        ))}

      {/* BUTTON OPTIONS */}
      <View style={utils.buttonOptions}>
        <Button mode="danger" onPress={() => navigation.navigate("Recursos")}>
          Cancel
        </Button>
        <Button mode="primary" onPress={handleSave}>
          Guardar
        </Button>
      </View>
    </View>
  );
};

export default NewResourceScreen;

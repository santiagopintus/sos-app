import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native-paper";
import Button from "../components/Button";
import global from "../styles/global/global";
import { useContext, useEffect, useState } from "react";
import utils from "../styles/global/utils";
import form from "../styles/layout/form";
import { MainContext } from "../context/MainContext";

const NewResourceScreen = ({ navigation }) => {
  /* CONTEXT */
  const mainContext = useContext(MainContext);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("cita");
  const [imgSrc, setImgSrc] = useState("");
  const [textContent, setTextContent] = useState("");
  const [href, setHref] = useState("");
  const [resource, setResource] = useState({});

  const handleSave = () => {
    setResource({ title, type, imgSrc, href });
  };

  /* On Resource change save to DB */
  useEffect(() => {
    if (Object.keys(resource).length > 0) {
      mainContext.addResource(resource);
    }
  }, [resource]);

  return (
    <View style={[utils.container, global.app]}>
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

      {type === "contacto" && (
        <TextInput
          keyboardType="phone-pad"
          style={form.input}
          label={"Número de teléfono"}
          dataDetectorTypes={"phoneNumber"}
          onChangeText={(text) => setImgSrc(text)}
        />
      )}
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

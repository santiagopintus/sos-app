import React from "react";
import { Picker } from "@react-native-picker/picker";
import { useContext, useEffect, useState } from "react";
import {
  ContactType,
  ContactsContext,
  PhoneNumber,
} from "../context/ContactsContext";
import form from "../styles/layout/form";

const ContactPicker = ({
  onContactSelect,
}: {
  onContactSelect: (c: ContactType) => void;
}) => {
  const contactsContext = useContext(ContactsContext);
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [selectedContactId, setSelectedContactId] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (contactsContext.contacts.length)
      setContacts(sortContacts(contactsContext.contacts));
  }, [contactsContext.contacts]);

  const sortContacts = (rawContacts: ContactType[]) => {
    let cleanContacts = rawContacts.filter(
      (c) => c.firstName && c.firstName !== ""
    );
    return cleanContacts.sort((a, b) => {
      return a.firstName.localeCompare(b.firstName);
    });
  };

  const handleContactSelect = (cId: string) => {
    setSelectedContactId(cId);
  };

  useEffect(() => {
    if (contacts.length && selectedContactId === null) {
      setSelectedContactId(contacts[0].id);
    }
  }, [contacts]);

  if (!contacts.length) return;

  return (
    <Picker
      selectedValue={selectedContactId}
      onValueChange={handleContactSelect}
      style={form.picker}
    >
      {contacts.map((c) => {
        if (c.phoneNumbers) {
          return (
            <Picker.Item
              label={
                c.firstName && c.lastName && `${c.firstName} ${c.lastName}`
              }
              value={c.id}
            ></Picker.Item>
          );
        }
      })}
    </Picker>
  );
};

export default ContactPicker;

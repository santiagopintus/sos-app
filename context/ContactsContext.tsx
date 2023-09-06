import React, { createContext, useEffect, useState } from "react";
import * as Contacts from "expo-contacts";

export interface ContactsContextType {
  contacts: ContactType[];
  setContacts: React.Dispatch<React.SetStateAction<ContactType[]>>;
}
export type ContactType = {
  id: string;
  contactType?: string;
  firstName: string;
  lastName: string;
  imageAvailable?: boolean;
  lookupKey?: string;
  name?: string;
  phoneNumbers?: PhoneNumber[];
};

export type PhoneNumber = {
  id: string;
  isPrimary?: number;
  label?: string;
  number: string;
  type?: string;
};

export const ContactsContext = createContext({} as ContactsContextType);

const ContactsProvider = ({ children }: { children: React.ReactNode }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync();

        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  return (
    <ContactsContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;

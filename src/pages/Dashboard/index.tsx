import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Board, Container } from "./styles";
import { Card } from "../../components/Card";
import { ModalAddContact } from "../../components/ModalAddContact";
import { ModalUserEdit } from "../../components/ModalEditUser";
import { userAuth } from "../../hooks/useAuth";
import { ModalDeleteContact } from "../../components/ModalDeleteContact";
import { ModalDeleteUser } from "../../components/ModalDeleteUser";
import { ModalContactEdit } from "../../components/ModalEditContact";

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

const defaulContact: Contact = {
  id: "",
  name: "",
  phone: "",
  email: "",
  createdAt: "",
};

export const Dashboard = () => {
  const [editUserModalIsOpen, setEditUserModalIsOpen] = useState(false);
  const [deleteUserModalIsOpen, setDeleteUserModalIsOpen] = useState(false);
  const [addContactsModalIsOpen, setAddContactsModalIsOpen] = useState(false);
  const [editContactsModalIsOpen, setEditContactsModalIsOpen] = useState(false);
  const [deleteContactsModalIsOpen, setDeleteContactsModalIsOpen] = useState(false);

  const toggleEditUserModal = () => setEditUserModalIsOpen(!editUserModalIsOpen);

  const toggleDeleteUserModal = () => setDeleteUserModalIsOpen(!deleteUserModalIsOpen);

  const toggleAddContactsModal = () => setAddContactsModalIsOpen(!addContactsModalIsOpen);

  const toggleEditContactModal = () => {
    setEditContactsModalIsOpen(!editContactsModalIsOpen);
  };

  const toggleDeleteContactModal = () => setDeleteContactsModalIsOpen(!deleteContactsModalIsOpen);

  const [contacts, setContacts] = useState<Contact[]>([]);

  const [contactToEdit, setContactToEdit] = useState<Contact>(defaulContact);

  const [contactId, setContactId] = useState("");

  const { userData, setUserData } = userAuth();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>("/contacts");

      setContacts(response.data);

      const userDataResponse = await api.get("/users");

      setUserData(userDataResponse.data);
    })();
  }, []);

  const renderCards = (contactsToRender: Contact[]) => {
    return contactsToRender.map((contact) => (
      <Card
        key={contact.id}
        contact={contact}
        toggleDeleteContactModal={toggleDeleteContactModal}
        toggleEditContactModal={toggleEditContactModal}
        setContactId={setContactId}
        setContactToEdit={setContactToEdit}
      />
    ));
  };

  return (
    <>
      <Container>
        <header>
          <button type="button" onClick={toggleAddContactsModal}>
            Novo Contato
          </button>
          <button type="button" onClick={toggleEditUserModal}>
            Editar Perfil
          </button>
          <button type="button" onClick={toggleDeleteUserModal}>
            Deletar Perfil
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("your-contacts:accessToken");
              navigate("/");
            }}
          >
            Sair
          </button>
        </header>
        <div>
          <h3>Bem vindo, {userData.name}</h3>
        </div>
        {addContactsModalIsOpen && (
          <ModalAddContact toggleAddContactsModal={toggleAddContactsModal} setContacts={setContacts} />
        )}
        {deleteContactsModalIsOpen && (
          <ModalDeleteContact
            toggleDeleteContactsModal={toggleDeleteContactModal}
            contacts={contacts}
            setContacts={setContacts}
            contactId={contactId}
          />
        )}
        {editUserModalIsOpen && <ModalUserEdit toggleEditUserModal={toggleEditUserModal} />}
        {deleteUserModalIsOpen && (
          <ModalDeleteUser toggleDeleteUserModal={toggleDeleteUserModal} userId={userData.id} />
        )}
        {editContactsModalIsOpen && (
          <ModalContactEdit
            toggleEditContactModal={toggleEditContactModal}
            contactId={contactId}
            setContacts={setContacts}
            contactToEdit={contactToEdit}
            contacts={contacts}
          />
        )}

        <main>
          <Board>{renderCards(contacts)}</Board>
        </main>
      </Container>
    </>
  );
};

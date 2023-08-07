import { Dispatch } from "react";
import { Contact } from "../../pages/Dashboard";
import { Container } from "./styles";
import contact_img from "../../assets/img/contact_img.png";

interface CardProps {
  contact: Contact;
  toggleDeleteContactModal: () => void;
  setContactId: Dispatch<React.SetStateAction<string>>;
  toggleEditContactModal: () => void;
  setContactToEdit: Dispatch<React.SetStateAction<Contact>>;
}

export const Card = ({
  contact,
  toggleDeleteContactModal,
  setContactId,
  toggleEditContactModal,
  setContactToEdit,
}: CardProps) => {
  const handleClickEditContact = (contactId: string, contact: Contact) => {
    setContactId(contactId);
    setContactToEdit(contact);
    toggleEditContactModal();
  };

  const handleClickDeleteContact = (contactId: string) => {
    setContactId(contactId);
    toggleDeleteContactModal();
  };

  return (
    <Container id={contact.id}>
      <figure>
        <img src={contact_img} alt="imagem padrão de usuário" />
      </figure>
      <h4>Nome: {contact.name}</h4>
      <p>E-mail: {contact.email}</p>
      <p>Telefone: {contact.phone}</p>
      <p>Data de Cadastro: {contact.createdAt}</p>
      <div>
        <button type="button" onClick={() => handleClickEditContact(contact.id, contact)}>
          Editar
        </button>
        <button type="button" onClick={() => handleClickDeleteContact(contact.id)}>
          Excluir
        </button>
      </div>
    </Container>
  );
};

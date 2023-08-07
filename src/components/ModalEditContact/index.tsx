import React, { Dispatch } from "react";
import { useForm } from "react-hook-form";
import { contactEditSchema } from "./validator";
import { Modal } from "../Modal";
import { api } from "../../services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { Contact } from "../../pages/Dashboard";

interface ModalContactEditProps {
  toggleEditContactModal: () => void;
  setContacts: Dispatch<React.SetStateAction<Contact[]>>;
  contactId: string;
  contacts: Contact[];
  contactToEdit: Contact;
}

export const ModalContactEdit = ({
  toggleEditContactModal,
  setContacts,
  contactId,
  contacts,
  contactToEdit,
}: ModalContactEditProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactEditSchema),
    mode: "onChange",
  });

  const editContact = async (data: any) => {
    const dataKeys = Object.keys(data);

    dataKeys.forEach((key) => {
      if (data[key] == "") {
        delete data[key];
      }
    });

    if (Object.keys(data).length !== 0) {
      try {
        const editedContact = await api.patch(`contacts/${contactId}`, data);

        const oldContacts = contacts.filter((contact) => contact.id !== contactId);

        setContacts([...oldContacts, editedContact.data]);

        toggleEditContactModal();

        toast.success("Contato editado com sucesso");
      } catch (error) {
        toast.error("O email já está cadastrado no sistema");
      }
    } else {
      toast.error("Ao menos um campo precisa ser enviado");
    }
  };

  return (
    <Modal toggleModal={toggleEditContactModal}>
      <form onSubmit={handleSubmit(editContact)}>
        <h2>Editar Contato</h2>
        <label htmlFor="name">Nome</label>
        <input type="name" id="name" {...register("name")} placeholder={contactToEdit.name}></input>
        {errors.name ? (
          <p className="FormError">
            <>{errors.name?.message}</>
          </p>
        ) : (
          <p></p>
        )}
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} placeholder={contactToEdit.email}></input>
        {errors.email ? (
          <p className="FormError">
            <>{errors.email?.message}</>
          </p>
        ) : (
          <p></p>
        )}
        <label htmlFor="phone">Telefone</label>
        <input type="phone" id="phone" {...register("phone")} placeholder={contactToEdit.phone}></input>
        {errors.phone ? (
          <p className="FormError">
            <>{errors.phone?.message}</>
          </p>
        ) : (
          <p></p>
        )}
        <button type="submit">Enviar</button>
      </form>
    </Modal>
  );
};

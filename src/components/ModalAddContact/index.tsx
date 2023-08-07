import React, { Dispatch } from "react";
import { Contact } from "../../pages/Dashboard";
import { useForm } from "react-hook-form";
import { TContactRegisterData, contactRegisterSchema } from "./validator";
import { Modal } from "../Modal";
import { api } from "../../services/api";
import { zodResolver } from "@hookform/resolvers/zod";

interface ModalAddContactProps {
  toggleAddContactsModal: () => void;
  setContacts: Dispatch<React.SetStateAction<Contact[]>>;
}

export const ModalAddContact = ({ toggleAddContactsModal, setContacts }: ModalAddContactProps) => {
  const { register, handleSubmit } = useForm<TContactRegisterData>({
    resolver: zodResolver(contactRegisterSchema),
  });

  const createContact = async (data: TContactRegisterData) => {
    const response = await api.post<Contact>("/contacts", data);

    setContacts((previousContacts) => [response.data, ...previousContacts]);
    toggleAddContactsModal();
  };

  return (
    <Modal toggleModal={toggleAddContactsModal}>
      <form onSubmit={handleSubmit(createContact)}>
        <h2>Adicionar Contato</h2>
        <label htmlFor="name">Nome</label>
        <input type="name" id="name" {...register("name")}></input>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")}></input>
        <label htmlFor="phone">Telefone</label>
        <input type="phone" id="phone" {...register("phone")}></input>
        <button type="submit">Cadastrar</button>
      </form>
    </Modal>
  );
};

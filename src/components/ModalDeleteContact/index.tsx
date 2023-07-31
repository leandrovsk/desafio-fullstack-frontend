import React, { Dispatch } from "react"
import { Contact } from "../../pages/Dashboard"
import { Modal } from "../Modal"
import { api } from "../../services/api"


interface ModalDeleteContactProps {
    toggleDeleteContactsModal: () => void
    setContacts: Dispatch<React.SetStateAction<Contact[]>>
    contactId: string
}

export const ModalDeleteContact = ({ toggleDeleteContactsModal, setContacts, contactId }: ModalDeleteContactProps) => {

    const deleteContact = async (contactId: string) => {
        await api.delete<Contact>(`/contacts/${contactId}`)

        toggleDeleteContactsModal()

        window.location.reload()
    }

    return (
        <Modal toggleModal={toggleDeleteContactsModal}>
            <h3>Tem certeza que deseja deletar esse contato?</h3>
            <button onClick={() => deleteContact(contactId)}>Deletar</button>
        </Modal>
    )
}
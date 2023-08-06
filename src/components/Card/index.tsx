import { Dispatch, MouseEvent } from "react";
import { Contact } from "../../pages/Dashboard";
import { Container } from "./styles";
import contact_img from "../../assets/img/contact_img.png"

interface CardProps {
    contact: Contact
    setContacts: Dispatch<React.SetStateAction<Contact[]>>
    toggleDeleteContactModal: () => void
    setContactId: Dispatch<React.SetStateAction<string>>
}


export const Card = ({ contact, setContacts, toggleDeleteContactModal, setContactId }: CardProps) => {

    function handleClick(event: MouseEvent) {
        const target = event.target as HTMLButtonElement;
        setContactId(target.parentElement!.parentElement!.id!)
        toggleDeleteContactModal()
    }
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
                <button type="button" onClick={() => console.log("clicou")}>Editar</button>
                <button type="button" onClick={(event: MouseEvent) => handleClick(event)}>Excluir</button>
            </div>
        </Container>
    )
}
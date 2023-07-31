import React, { Dispatch } from "react"
import { Contact } from "../../pages/Dashboard"
import { useForm } from "react-hook-form"
import { TUserEditData, userEditSchema } from "./validator"
import { Modal } from "../Modal"
import { api } from "../../services/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import { userAuth } from "../../hooks/useAuth"


interface ModalUserEditProps {
    toggleEditUserModal: () => void
    setContacts: Dispatch<React.SetStateAction<Contact[]>>
}


export const ModalUserEdit = ({ toggleEditUserModal }: ModalUserEditProps) => {
    const { register, handleSubmit } = useForm<TUserEditData>({
        resolver: zodResolver(userEditSchema)
    })

    const { userData } = userAuth()

    const navigate = useNavigate()

    const editUser = async (data: TUserEditData) => {
        try {
            const response = await api.get("/users")

            const editResponse = await api.patch(`users/${response.data.id}`, data)

            console.log(editResponse)

            navigate("/")

            toggleEditUserModal()

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Modal toggleModal={toggleEditUserModal}>
            <form onSubmit={handleSubmit(editUser)}>
                <label htmlFor="name">Nome</label>
                <input type="name" id="name"  {...register("name")} defaultValue={userData.name}></input>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")} defaultValue={userData.email}></input>
                <label htmlFor="phone">Senha</label>
                <input type="password" id="password" {...register("password")}></input>
                <label htmlFor="phone">Telefone</label>
                <input type="phone" id="phone" {...register("phone")} defaultValue={userData.phone}></input>
                <button type="submit">Enviar</button>
            </form>
        </Modal>
    )
}
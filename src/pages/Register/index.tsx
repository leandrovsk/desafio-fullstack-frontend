import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Container } from "./styles"
import { TRegisterData, registerSchema } from "./validator"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

export const Register = () => {
    const { register, handleSubmit } = useForm<TRegisterData>({
        resolver: zodResolver(registerSchema)
    })

    const navigate = useNavigate()

    const createUser = async (data: TRegisterData) => {
        try {
            await api.post("/users", data)

            navigate("/")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(createUser)}>
                <h2>Cadastro</h2>
                <label htmlFor="name">Nome</label>
                <input type="name" id="name" {...register("name")}></input>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")}></input>
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" {...register("password")}></input>
                <label htmlFor="phone">Phone</label>
                <input type="phone" id="phone" {...register("phone")}></input>
                <button type="submit">Enviar</button>
                <button type="button" onClick={() => navigate("/")}>Voltar</button>
            </form>
        </Container>
    )
}
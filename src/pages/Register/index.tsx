import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Container } from "./styles"
import { TRegisterData, registerSchema } from "./validator"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const Register = () => {
    const { register, handleSubmit, formState:{ errors} } = useForm<TRegisterData>({
        mode:"onChange" ,
        resolver: zodResolver(registerSchema)
    })

    const navigate = useNavigate()

    const createUser = async (data: TRegisterData) => {
        try {
            await api.post("/users", data)

            toast.success("Usuário criado com Sucesso!");

            navigate("/")

        } catch (error: any) {
            if(error.message == "Network Error") {
                toast.error("Serviço indisponível")
            } else {
                toast.error("E-mail já cadastrado no sistema");
            }
            console.log(error)
        }
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(createUser)}>
                <h2>Cadastro</h2>
                <label htmlFor="name">Nome</label>
                <input type="name" id="name" {...register("name")}></input>
                {errors.name ? (
                <p className="FormError">
                    <>{errors.name.message}</>
                </p>
                ) : <p></p>}
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")}></input>
                {errors.email ? (
                <p className="FormError">
                    <>{errors.email.message}</>
                </p>
                ) : <p></p>}
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" {...register("password")}></input>
                {errors.password ? (
                <p className="FormError">
                    <>{errors.password.message}</>
                </p>
                ) : <p></p>}
                <label htmlFor="phone">Phone</label>
                <input type="phone" id="phone" {...register("phone")}></input>
                {errors.phone ? (
                <p className="FormError">
                    <>{errors.phone.message}</>
                </p>
                ) : <p></p>}
                <button type="submit">Enviar</button>
                <button type="button" onClick={() => navigate("/")}>Voltar</button>
            </form>
        </Container>
    )
}
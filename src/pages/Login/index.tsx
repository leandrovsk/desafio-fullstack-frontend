import { useForm } from "react-hook-form";
import { TLoginData, loginSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { userAuth } from "../../hooks/useAuth";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginData>({ mode: "onChange", resolver: zodResolver(loginSchema) });
  const { signIn } = userAuth();

  const navigate = useNavigate();

  return (
    <Container>
      <form onSubmit={handleSubmit(signIn)}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")}></input>
        {errors.email ? (
          <p className="FormError">
            <>{errors.email.message}</>
          </p>
        ) : (
          <p></p>
        )}
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")}></input>
        {errors.password ? (
          <p className="FormError">
            <>{errors.password?.message}</>
          </p>
        ) : (
          <p></p>
        )}
        <button type="submit">Acessar</button>
        <button type="button" onClick={() => navigate("/register")}>
          Cadastre-se
        </button>
      </form>
    </Container>
  );
};

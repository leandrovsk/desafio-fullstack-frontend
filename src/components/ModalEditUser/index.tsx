import { useForm } from "react-hook-form";
import { TUserEditData, userEditSchema } from "./validator";
import { Modal } from "../Modal";
import { api } from "../../services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { userAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";

interface ModalUserEditProps {
  toggleEditUserModal: () => void;
}

export const ModalUserEdit = ({ toggleEditUserModal }: ModalUserEditProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserEditData>({
    resolver: zodResolver(userEditSchema),
    mode: "onChange",
  });

  const { userData, setUserData } = userAuth();

  const editUser = async (data: any) => {
    const dataKeys = Object.keys(data);

    dataKeys.forEach((key) => {
      if (data[key] == "") {
        delete data[key];
      }
    });

    if (Object.keys(data).length !== 0) {
      try {
        const response = await api.get("/users");

        const newUserData = await api.patch(`users/${response.data.id}`, data);

        setUserData(newUserData.data);

        toggleEditUserModal();
        toast.success("Dados editados com sucesso");
      } catch (error) {
        toast.error("O email já está cadastrado no sistema");
      }
    } else {
      toast.error("Ao menos um campo precisa ser enviado");
    }
  };

  return (
    <Modal toggleModal={toggleEditUserModal}>
      <form onSubmit={handleSubmit(editUser)}>
        <h2>Editar Perfil</h2>
        <label htmlFor="name">Nome</label>
        <input type="name" id="name" {...register("name")} placeholder={userData.name}></input>
        {errors.name ? (
          <p className="FormError">
            <>{errors.name?.message}</>
          </p>
        ) : (
          <p></p>
        )}
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} placeholder={userData.email}></input>
        {errors.email ? (
          <p className="FormError">
            <>{errors.email?.message}</>
          </p>
        ) : (
          <p></p>
        )}
        <label htmlFor="phone">Senha</label>
        <input type="password" id="password" {...register("password")} placeholder="********"></input>
        {errors.password ? (
          <p className="FormError">
            <>{errors.password?.message}</>
          </p>
        ) : (
          <p></p>
        )}
        <label htmlFor="phone">Telefone</label>
        <input type="phone" id="phone" {...register("phone")} placeholder={userData.phone}></input>
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

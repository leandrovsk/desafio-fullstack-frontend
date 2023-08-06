import { Modal } from "../Modal";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface ModalDeleteUserProps {
  toggleDeleteUserModal: () => void;
  userId: string;
}

export const ModalDeleteUser = ({ toggleDeleteUserModal, userId }: ModalDeleteUserProps) => {
  const navigate = useNavigate();

  const deleteContact = async (userId: string) => {
    try {
      await api.delete(`/users/${userId}`);

      toggleDeleteUserModal();

      localStorage.clear();

      toast.warning("Seu usuário foi deletado com sucesso");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal toggleModal={toggleDeleteUserModal}>
      <h3>Tem certeza que deseja deletar seu usuário?</h3>
      <button onClick={() => deleteContact(userId)}>Deletar</button>
    </Modal>
  );
};

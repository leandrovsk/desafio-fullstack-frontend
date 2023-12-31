import { createContext, useEffect, useState } from "react";
import { TLoginData } from "../../pages/Login/validator";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { AuthContextValues, AuthProviderProps, UserData } from "./types";
import { toast } from "react-toastify";

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<UserData>({ id: "", name: "", email: "", phone: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("your-contacts:accessToken");
    if (!accessToken) {
      setLoading(false);
      navigate("/");
      return;
    }

    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    setLoading(false);
  }, []);

  const signIn = async (data: TLoginData) => {
    try {
      const response = await api.post("/login", data);

      const { accessToken } = await response.data;

      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      const userDataResponse = await api.get("/users");

      const { id, name, email, phone } = await userDataResponse.data;

      const userData = {
        id: id,
        name: name,
        email: email,
        phone: phone,
      };

      setUserData(userData);

      localStorage.setItem("your-contacts:accessToken", accessToken);

      toast.success("Login Efetuado com Sucesso!");

      setLoading(false);

      navigate("/dashboard");
    } catch (error: any) {
      if (error.message == "Network Error") {
        toast.error("Serviço indisponível");
      } else {
        toast.error("Usuário ou senha incorretos!");
      }
      console.log(error);
    }
  };

  return <AuthContext.Provider value={{ signIn, loading, userData, setUserData }}>{children}</AuthContext.Provider>;
};

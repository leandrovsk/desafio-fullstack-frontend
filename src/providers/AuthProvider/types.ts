import { Dispatch, ReactNode } from "react"
import { TLoginData } from "../../pages/Login/validator"

export interface AuthProviderProps {
    children: ReactNode
}

export interface AuthContextValues {
    signIn: (data: TLoginData) => Promise<void>
    loading: boolean
    userData: UserData
    setUserData: Dispatch<React.SetStateAction<UserData>>
}

export interface UserData {
    name: string
    email: string
    phone: string
}

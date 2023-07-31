import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider/AuthProvider"


export const userAuth = () => {
    const authContext = useContext(AuthContext)

    return authContext
}
import { ToastContainer } from "react-toastify"
import { AuthProvider } from "./providers/AuthProvider/AuthProvider"
import { RoutesMain } from "./routes"
import GlobalStyle from "./styles/GlobalStyle"

import "react-toastify/dist/ReactToastify.css";

export const App = () => {

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <GlobalStyle />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  )
}



import { AuthProvider } from "./providers/AuthProvider/AuthProvider"
import { RoutesMain } from "./routes"
import GlobalStyle from "./styles/GlobalStyle"

export const App = () => {

  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  )
}



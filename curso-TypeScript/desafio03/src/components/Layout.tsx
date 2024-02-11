import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header/Header"

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Box minHeight='100vh' backgroundColor='#1e192c' padding='25px'>
        {children}
      </Box>
      <Footer />
    </>
  )
}

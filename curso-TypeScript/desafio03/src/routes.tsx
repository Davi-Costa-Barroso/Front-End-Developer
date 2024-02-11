import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Conta from "./pages/Conta"
import ContaInfo from "./pages/ContaInfo"
import { AppContext } from "./components/AppContext"
import { useContext } from "react"

const MainRoutes = () => {
    const { loggedIn} = useContext(AppContext)
    
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={loggedIn ? <Conta />: <Home/>} />
            <Route path='/infoconta' element={<ContaInfo />} />
        </Routes>
    )
}
export default MainRoutes
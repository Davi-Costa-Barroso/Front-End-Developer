import { Center, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { Botao } from "../components/Botao";
import { login } from "../services/login";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')

    const { setLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string, senha: string) => {
        const loggedIn = await login(email, senha)

        if (!loggedIn) {
            alert('Login incorreto')
        }
        else {
            setLoggedIn(true)
            changeLocalStorage({
                login: true
            })
            navigate('/conta/1')
        }
    }

    return (
        <Card>
            <Center>
                <h1 className='title'>Faça Login</h1>
            </Center>
            <label htmlFor='email'>E-mail:</label>
            <Input placeholder="email" color={'white'} id='email' value={email} onChange={(event) => setEmail(event?.target.value)} />
            <label htmlFor='senha'>Senha:</label>
            <Input placeholder="password" color={'white'} type='password' id='senha' value={senha} onChange={(event) => setSenha(event?.target.value)} />
            <Botao onClick={() => validateUser(email, senha)} />
        </Card>
    )
}
export default Home;
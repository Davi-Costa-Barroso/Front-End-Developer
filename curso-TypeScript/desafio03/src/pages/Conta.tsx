import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import CardInfo from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from '../api'
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext";

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}
const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>()
    const { id } = useParams()
    const navigate = useNavigate()
    const {loggedIn} = useContext(AppContext)

    if (userData && id !== userData.id) {
        navigate('/')
    }
    
    if(!loggedIn){
        navigate('/')
    }
    
    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        getData()
    }, [])

    const actualDate = new Date()
    return (
        <Center>
            <SimpleGrid column={2} spacing={8} paddingTop={16}>
                {!userData ? (<Spinner size='xl' color="white" />
                ) :
                    (
                        <>
                            <CardInfo mainContent={`Usuário: ${userData?.name}`} content={`
                    ${actualDate.getDay()} /${actualDate.getMonth()} /${actualDate.getFullYear()} ${actualDate.getHours()}h${actualDate.getMinutes()}`} />
                            <CardInfo mainContent={'Saldo'} content={`RS ${userData?.balance}`} />
                            <CardInfo mainContent={'Email'} content={`${userData?.email}`} />
                        </>
                    )}
            </SimpleGrid>
        </Center>
    )
}
export default Conta;
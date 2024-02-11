import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
const ContaInfo = ()=>{
 return(
    <>
    <Text fontWeight='bold' fontSize='3x1' color='white'>
        Informações da conta
    </Text>
    <Link to='/conta/1'>
        <Text fontSize='xl' color='white'>
            Conta
        </Text>
    </Link>
    </>
 )
}

export default ContaInfo
import {
    Button
} from '@chakra-ui/react'
import './Card.css'

interface IDBotao{
    onClick: () => void
}
export const Botao = ({onClick}: IDBotao) => {
    return (
        <div>
            <Button onClick={onClick} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
                Entrar
            </Button>
        </div>
    )
}
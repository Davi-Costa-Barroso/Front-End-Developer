import {
    Button
} from '@chakra-ui/react'
import './Card.css'
import { MouseEventHandler } from 'react'

interface IDBotao{
    onClick: MouseEventHandler
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
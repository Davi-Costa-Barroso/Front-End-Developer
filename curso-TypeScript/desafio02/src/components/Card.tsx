import { login } from '../services/login';
import { Botao } from './Botao';
import {
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import './Card.css'

export const Card = () => {
  return (
    <div>
      <Box backgroundColor='#1e192c' borderRadius='25px' padding='15px' className='card'>
        <Center>
          <h1 className='title'>Faça Login</h1>
        </Center>
        <label htmlFor='email'>E-mail:</label>
        <Input placeholder="email" color={'white'} id='email' />
        <label htmlFor='senha'>Senha:</label>
        <Input placeholder="password" color={'white'} type='password' id='senha' />
        <Botao onClick={login}/>
      </Box>
    </div>
  )
}
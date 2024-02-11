import { useContext } from 'react'
import { AppContext } from '../AppContext'
import './Header.css'
import {
  Box,
  Button,
  Center, Flex, Spacer
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../../services/storage'

export const Header = () => {
  const { loggedIn, setLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({
      login: false
    })
    setLoggedIn(false)
    navigate('/')
  }

  return (
    <Flex className='header'>
      <Box>
        <Center>
          <h1>Desafio 03 - DIO</h1>
        </Center>
      </Box>
      {loggedIn && (
        <>
          <Spacer />
          <Button onClick={() => logout()}>
            Sair
          </Button>
        </>)}
    </Flex>

  )
}

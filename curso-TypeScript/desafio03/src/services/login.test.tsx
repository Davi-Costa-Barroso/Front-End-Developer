import { login } from "./login"

const mocksetLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react', ()=>({
    ...jest.requireActual('react'),
    useContext: ()=>({
        setLoggedIn: mocksetLoggedIn
    })
}))

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: ()=> mockNavigate
}))

describe('login', () => {
    const mockEmail = 'test@gmail.com'
    const mockSenha = '123456'
    
    it('Deve retornar verdadeiro caso email e senha sejam validos', async() => {
        const response = await login(mockEmail, mockSenha)
        expect(response).toBeTruthy()
    })
    it('Deve exibir um erro caso email seja invalido', async() => {
        const response = await login('invalido@gmail.com', mockSenha)
        expect(response).toBeFalsy()
    })

    it('Deve exibir um erro caso a senha seja invalido', async() => {
        const response = await login(mockEmail, '12312')
        expect(response).toBeFalsy()
    })
})
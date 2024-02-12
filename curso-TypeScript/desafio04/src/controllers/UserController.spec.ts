import { UserService } from "../services/UserService"
import { UserController } from "./UserController"
// import { makeMockRequest } from "../__mocks__/mockRequest.mock"
import { makeMockResponse } from "../__mocks__/mockResponse.mock"
import {Request} from 'express'
describe('UserController', ()=>{
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(),
        getAllUser: jest.fn(),
        deleteUser: jest.fn()
    }

    const userController = new UserController(mockUserService as UserService);

    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'dav',
                email: 'dav@test.com'
            }
        } as Request
        
        const MockResponse = makeMockResponse()
        userController.createUser(mockRequest, MockResponse)
        expect(MockResponse.state.status).toBe(201)
        expect(MockResponse.state.json).toMatchObject({message: 'Usuário criado'})
    })

    it('Deve mostrar mensagem caso não tenha nome', ()=>{
        const mockRequest = {
            body: {
                name: '',
                email: 'dav@test.com'
            }
        } as Request

        const MockResponse = makeMockResponse()
        userController.createUser(mockRequest, MockResponse)
        expect(MockResponse.state.status).toBe(400)
        expect(MockResponse.state.json).toMatchObject({message: 'BAD REQUEST. name'})
    })

    it('Deve mostrar mensagem caso não tenha email', ()=>{
        const mockRequest = {
            body: {
                name: 'dav',
                email: ''
            }
        } as Request

        const MockResponse = makeMockResponse()
        userController.createUser(mockRequest, MockResponse)
        expect(MockResponse.state.status).toBe(400)
        expect(MockResponse.state.json).toMatchObject({message: 'BAD REQUEST. email'})
    })

    it('Deve chamar os usuários cadastrados', ()=>{
        const mockRequest = {
            body: {
                name: '',
                email: ''
            }
        } as Request

        const MockResponse = makeMockResponse()
        userController.getAllUser(mockRequest, MockResponse)
        expect(MockResponse.state.status).toBe(200)
    })

    it('Deve deletar usuário', ()=>{
        const mockRequest = {
            body: {
                name: 'dav',
                email: 'dav@test.com'
            }
        } as Request
        
        const MockResponse = makeMockResponse()
        userController.deleteUser(mockRequest, MockResponse)
        expect(MockResponse.state.status).toBe(201)
        expect(MockResponse.state.json).toMatchObject({message: 'Usuário deletado'})
    })
})
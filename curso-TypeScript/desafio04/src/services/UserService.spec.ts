import { UserDB, UserService } from "./UserService"


describe('UserService', ()=>{
    const mockDB: UserDB[] = []
    const userService = new UserService(mockDB)

    it('Deve adicionar um novo usuário', ()=>{
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('davi', 'davi@test.com')
        expect(mockConsole).toHaveBeenCalledWith('DB atualizado!', mockDB)
    })
})
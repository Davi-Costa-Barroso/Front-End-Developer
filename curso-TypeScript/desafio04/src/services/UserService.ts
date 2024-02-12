export interface UserDB{
    name: string,
    email: string
}
const db = [
    {
        name: "Davi",
        email: "davi@test.com"
    }
]

export class UserService{

    db: UserDB[]

    constructor(database = db){
        this.db = database
    }
    
    createUser = (name: string, email: string)=>{
        const user = {
            name,
            email
        }
        this.db.push(user)
        console.log("DB atualizado!", this.db)
    }
    getAllUser =()=>{
        console.log("Usuários listados")
        return this.db
    }
    deleteUser = (name: string)=>{
        const index = this.db.findIndex(user => user.name === name);
        if(index !== -1){
            this.db.splice(index, 1)
            console.log("Usuário removido. DB =", this.db)
        }
        else{
            console.log("Usuário não encontrado. DB =", this.db)
        }
    }
}
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
}
import {Request, Response} from "express";
import { UserService } from "../services/UserService";

export class UserController{
    userService: UserService

    constructor(userService = new UserService()){
        this.userService = userService
    }

    createUser = (request: Request, response: Response) =>{
        const user = request.body;

        if(!user.name){
            return response.status(400).json({message: 'BAD REQUEST. name'})
        }

        if(!user.email){
            return response.status(400).json({message: 'BAD REQUEST. email'})
        }

        this.userService.createUser(user.name, user.email)
        return response.status(201).json({message: 'Usuário criado'})
    }
    getAllUser = (request: Request, response: Response)=>{
       
        const users = this.userService.getAllUser()
        return response.status(200).json(users)
    }
}
"use server"
import { PrismaClient } from "@prisma/client";


const client = new PrismaClient()
export async function createUser(username:string,password:string){
    try {
         await client.user.create({data:{
            username,password
         }})
         return "signedup"
    } catch (error) {
        console.log(error)
    }
}
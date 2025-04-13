"use server"
import{PrismaClient} from '@prisma/client';
import bcrypt from "bcrypt";
export async function registrate(username:string,password:string)
{
    const prisma=new PrismaClient();
    const hashing=await bcrypt.hash(password,10)
    await prisma.account.create({
        data:{
        account_username:username,
        account_password:hashing,
        }
        
    })
}
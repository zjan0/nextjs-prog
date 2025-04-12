"use server"
import{PrismaClient} from '@prisma/client';
export async function registrate(username:string,password:string)
{
    const prisma=new PrismaClient();
    await prisma.account.create({
        data:{
        account_username:username,
        account_password:password,
        }
        
    })
}
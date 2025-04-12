"use server"

import {PrismaClient} from '@prisma/client'
export async function creation(name:string,author:string,type:string)
{
    const prisma=new PrismaClient();
   
        await prisma.songs.create({
            data:{
                //id:autoincrement(),
                song_name:name,
                song_author:author,
                song_type:type,
                //created_at:'',
            }
        })
        /*await prisma.songs.update({
            where:{id:1},
            data:{published:true},
        })*/
    
    const val=prisma.songs.findMany({take:10});
    console.log(val);
}
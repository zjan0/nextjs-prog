//import {useSession} from "next-auth/react";
"use server"
import {PrismaClient, songs} from '@prisma/client'
export default async function OwnList(username:any)
{
    //username="username";
    //const{data: session}=useSession();
    //console.log(username);
    const prisma=new PrismaClient();
    const val/*:songs[]*/=await prisma.songs.findMany({take:100000,include:{_count:{select:{likaccounts:true}}},where:{accounts:{some:{account_username: username}/*session?.user?.name*/}}});
    return val;
    /*return<>
    {val.length === 0 && <strong>song list is empty</strong>}
        {val.length > 0 && <ul>
            {val.map((item, idx) => {
                return <li key={idx}>
                    {item.id}
                    {" "}
                    <a href={item.song_name}>
                        {item.song_name}
                    </a>
                    {" "}
                    {item.song_author}
                    {" "}
                    {item.song_type}
                    
                </li>
                
            })}
        </ul>}
    </>*/
}
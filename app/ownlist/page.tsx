/*import {useSession} from "next-auth/react";
import {PrismaClient, songs} from '@prisma/client'
export default async function OwnList()
{
    const{data: session}=useSession();
    const prisma=new PrismaClient();
    const val:songs[]=await prisma.songs.findMany({take:100000,where:{accounts:{account_username:session?.user?.name}}});
    return<>
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
    </>
}*/
"use server"
import Client from "./Client";

export default async function YourList()
{

    return<>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    <Client />
    <div><a href="../">back</a></div>
    </div></div>
    </>
}
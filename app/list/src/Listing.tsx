import {PrismaClient} from '@prisma/client'
export default async function Listing()
{
    const prisma=new PrismaClient();
    const val=await prisma.songs.findMany({take:10000000});

    console.log(val);
    
    return<>
    {val.length === 0 && <strong>song list is empty</strong>}
        {val.length > 0 && <ul>
            {val.map((item, idx) => {
                return <li key={idx}>
                    {item.id}
                    {" "}
                    <a href="{item.song_name}">
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
}
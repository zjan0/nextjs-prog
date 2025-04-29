import {PrismaClient, songs} from '@prisma/client'
//import song from '../../[song]/page'
//import Link from 'next/link'
//import Links from './[song]/Links';
//import Links from './Original'
//import Songs from '../../songtest/page'
//const[username,SetUsername]=useState("")
//const prisma=new PrismaClient();
export default async function Listing()
{
    //const val=await link();
    const prisma=new PrismaClient();
    const val:songs[]=await prisma.songs.findMany({take:10000000});
    // /*<Songs val={val} />*/
    /*return(
        <Links val={val} />
        
    )*/
    return<>
    {val.length === 0 && <strong>song list is empty</strong>}
        {val.length > 0 && <ul>
            {val.map((item, idx) => {
                //song(item.song_name) <Links val={item.song_name} />
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
}
/*export async function link()
{
    const val=await prisma.songs.findMany({take:10000000});
    return val;
}*/


    
    /*
    const onSubmit=async()=>{}
    
    
    <a href={item.song_name}>
                    {item.song_name}
                    </a>
    song('10');
    console.log(val);
    return<>
    {val.length === 0 && <strong>song list is empty</strong>}
        {val.length > 0 && <ul>
            {val.map((item, idx) => {
                //song(item.song_name)
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
//}
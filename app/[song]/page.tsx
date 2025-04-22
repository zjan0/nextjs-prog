'use server'
import Songpage from './Songpage';
//import Params from './params'
//import { useParams } from 'next/navigation'
//import Songs from '../../[song]/page'
import {PrismaClient} from '@prisma/client'
export default async function Nav(params:any){
  //const {song} = useParams();
  console.log(params);
  const {song}=await params.params;
  console.log(song);
  const prisma=new PrismaClient();
  const values=await prisma.songs.findFirst({where:{song_name:song}});
  console.log(values);
  return<>
  <Songpage values={values} />
  </>
//const param=Params(); <Songpage val={song} />
//var params=param;
//console.log(param)
//const prisma=new PrismaClient();
//Songpage(param)
}
  //console.log(song);
   /* console.log("testing value");
    console.log(value);
    const prisma=new PrismaClient(); 
      const val=await prisma.songs.findMany({take:20});
      console.log(val);*/
    //console.log(val)
    //onst value=await prisma.songs.findFirst({where:{song_name:name}})
    /*const value = await prisma.songs.findFirst({
        where: { song_name:val },
      });*/
    //return<></>
    /*return(<Links val={val} />
        
    )*/
  /*return<>
    {val.length === 0 && <strong>song list is empty</strong>}
        {val.length > 0 && <ul>
            {val.ma;p((item:any, idx:any) => {
                //song(item.song_name)
                return <li key={idx}>
                    {item.id}
                    {" "}
                    <Link href={item.song_name}>
                    {item.song_name}
                    </Link>
                    {" "}
                    {" "}
                    {item.song_author}
                    {" "}
                    {item.song_type}
                    
                </li>
                
            })}
        </ul>}
    </>*/
    /*function invalidate(value:any)
    
        //console.log("testing")
        //<Songs val={value} />
        //console.log(value);
        //Listing(value);
        //Listing(value);
        //console.log(value.song_name)
    }*/

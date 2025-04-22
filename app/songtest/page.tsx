//'use client'
//import {PrismaClient} from '@prisma/client'
//import { useParams } from 'next/navigation';

//export default async function song({name}/*name*/:any)
//{
    //const slug = useParams();
    //var a=slug.ToString;
   /* console.log("test")
    //console.log(slug);
    //return<><div>fkasfljsdaf</div></>
    //console.log("testing");
    //const val=name;
    const prisma=new PrismaClient();
    //console.log(val)
    //onst value=await prisma.songs.findFirst({where:{song_name:name}})
    const value = await prisma.songs.findFirst({
        where: { song_name:name },
      });
      //console.log(value)*/
     // return<><div>testing</div></>
    /*return <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <h1>song</h1>
            <h2>name {value?.song_name}</h2>
            <h3>author {value?.song_author}</h3>
            <div>
                <a href="../">back</a>
            </div>
        </div>
    </div>*/
//}
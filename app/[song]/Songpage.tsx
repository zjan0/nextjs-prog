'use client'
export default function Songpage({values}:any)
{
    console.log("testing")
    console.log(values);
    console.log(values.song_name);
    //const {val}=value;
    //console.log(value);
    //console.log(value);
    //console.log(val);
    //const prisma=new PrismaClient();
    //const values=await prisma.songs.findFirst({where:{song_name:val}});
    //console.log(values);
    return<>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    <div>testing</div>
    <div>song name: {values?.song_name}</div>
    <div>song author: {values?.song_author}</div>
    <div>song type: {values?.song_type}</div>
    <a href="../">back</a>
    </div></div>
    </>
}
"use server"
import{PrismaClient} from '@prisma/client'
/*type FavoritesProps = {
  username: string;  // val can be string or undefined (if it might be missing)
};*/
export async function addLikes(val:string, username : string)
{
    const prisma=new PrismaClient();
    const value=await prisma.songs.findFirst({where:{song_name:val,likaccounts:{some:{account_username: username}}}});//session?.user?.name
    if(value==null)
    {
        await prisma.songs.update({
            data:{
                likaccounts:{connect:
                    { account_username: username}//session?.user?.name
                    
                }
            }
            ,where:{song_name:val}
        })
    }
    else
    {
        await prisma.songs.update({
            data:{
                likaccounts:{disconnect:
                    { account_username: username}//session?.user?.name
                    
                }
            }
            ,where:{song_name:val}
        })
    }
}
export async function Islikenull(val:string,username:any)
{
    const prisma=new PrismaClient();
    //const value="";
    const value=await prisma.songs.findFirst({where:{song_name:val,likaccounts:{some:{account_username: username}}}});
    //const valueb=await prisma.songs.findFirst({where:{song_name:val,accounts:{some:{account_username: username}}}});
    console.log("like");
    console.log(value);
    return value;
}
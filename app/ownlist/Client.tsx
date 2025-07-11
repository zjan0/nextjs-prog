//"use server" 
"use client"
import {useSession} from "next-auth/react";
import OwnList from "./OwnList";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
/*export default async*/ function Client()
{
    const[loaded,SetLoaded]=useState("")
    const[val,setValue]=useState<{
    _count: { likaccounts: number };
    id: bigint;
    created_at: Date;
    song_name: string;
    song_author: string;
    song_type: string;
  }[]>([]);
    const{data: session}=useSession();
    /*const username=session?.user?.name;
    const data=OwnList(username);
    console.log(data);*/
    useEffect(()=>{
        (async()=>{
let username="";
  if(session?.user?.name!=null)
  {
  username=session?.user?.name;
  }
    const data=await OwnList(username);
    setValue(data);
    SetLoaded("Loaded");
    //console.log(data);
        })()
/*const username=session?.user?.name;
    const data=OwnList(username);
    console.log(data);*/


    },[])
    
    //return<></>
    if(!session)
    {
        redirect("../login");
    }
    if(loaded!="Loaded")
    {
        return<><div>Loading</div></>
    }
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
                    {" "}
                    {item._count.likaccounts}
                </li>
                
            })}
        </ul>}
    </>
    /*return<>
    <OwnList val={username} />
    </>*/
    
    /*return<>
    <OwnList/>
    </>*/
}
export default Client
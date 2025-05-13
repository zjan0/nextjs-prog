//"use server"
"use client"
import {useSession} from "next-auth/react";
import OwnList from "./OwnList";
import { useEffect, useState } from "react";
/*export default async*/ function Client()
{
    const[val,setValue]=useState("")
    const{data: session}=useSession();
    /*const username=session?.user?.name;
    const data=OwnList(username);
    console.log(data);*/
    useEffect(()=>{
        (async()=>{
const username=session?.user?.name;
    const data=await OwnList(username);
    setValue(data);
    console.log(data);
        })()
/*const username=session?.user?.name;
    const data=OwnList(username);
    console.log(data);*/


    },[])
    
    //return<></>
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
    /*return<>
    <OwnList val={username} />
    </>*/
    
    /*return<>
    <OwnList/>
    </>*/
}
export default Client
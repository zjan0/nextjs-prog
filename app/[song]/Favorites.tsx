"use client"
import {useSession} from "next-auth/react";
import {addFavorites, Isnull} from "./AddFavorites"
import { useEffect, useState } from "react";

export default function Favorites(value:any)
{  
  //authprovider.getIdentity
  //NextAuthSessionProvider.name;
  //const{data:session}=getSession();
  const[isnull,setNull]=useState("")
  const{data: session}=useSession();
  const username=session?.user?.name;
  console.log(username);
  console.log();
  console.log("testing");
  console.log(session);
  //console.log(val);
  //const {value}=val;
  //console.log(value);
  const {val}=value;
  useEffect(()=>{
          (async()=>{
            const isitnull=await Isnull(val,username);
            setNull(isitnull);
            console.log("testing__")
            console.log(isnull);
          })()
        },[])
  /*const username=session?.user?.name;
      const data=await OwnList(username);
      setValue(data);
      console.log(data);*/
          
  /*const Something=async()=>{
  const isnull=await Isnull(val,username);
  console.log(isnull);
  }
  Something();*/
  const onSubmit=()=>{addFavorites(val,username)}
  if(isnull==null)
  {
  return<>
  <div onClick={()=>onSubmit()}>add Favorites</div>
  </>
  }
  return<>
  <div onClick={()=>onSubmit()}>remove Favorites</div>
  </>
  //else
  //{
    
  //}*/
}
/*'use client'
import { useParams } from 'next/navigation'
export default function Naviagator(){
  const {song} = useParams();
  return song;
}*/
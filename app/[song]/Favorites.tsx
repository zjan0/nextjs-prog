"use client"
import {useSession} from "next-auth/react";
import {addFavorites, Isfavnull} from "./AddFavorites"
import { useEffect, useState } from "react";
import {addLikes,Islikenull} from "./AddLike"

export default function Favorites(value:any)
{  
  //authprovider.getIdentity
  //NextAuthSessionProvider.name;
  //const{data:session}=getSession();
  // //console.log(username);
  //console.log();
  //console.log("testing");
  //console.log(session);
  //console.log(val);
  //const {value}=val;
  //console.log(value);
  const[isfavnull,setfavNull]=useState("")
  const[islikenull,setlikeNull]=useState("")
  const{data: session}=useSession();
  const username=session?.user?.name;
  
  const {val}=value;
  useEffect(()=>{
          (async()=>{
            const isfavitnull=await Isfavnull(val,username);
            const islikeitnull=await Islikenull(val,username);
            setfavNull(isfavitnull);
            setlikeNull(islikeitnull);
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
  const FavoriteClick=()=>{addFavorites(val,username)}
  const LikeClick=()=>{addLikes(val,username)}
  /*return<>
  <div onClick={()=>FavoriteClick()}>add Favorites</div>
  <div onClick={()=>LikeClick()}>add Likes</div>
  </>*/
  let favvalue="remove";
  let likevalue="remove";
  if(isfavnull==null)
  {
    favvalue="add";
  }
  if(islikenull==null)
  {
    likevalue="add";
  }
  return<>
  <div onClick={()=>FavoriteClick()}>{favvalue} Favorites</div>
  <div onClick={()=>LikeClick()}>{likevalue} Likes</div>
  </>
  /*if(isfavnull==null)
  {
    if(islikenull==null)
    {
      return<>
  <div onClick={()=>FavoriteClick()}>add Favorites</div>
  <div onClick={()=>LikeClick()}>add Likes</div>
  </>
    }
    return<>
  <div onClick={()=>FavoriteClick()}>add Favorites</div>
  <div onClick={()=>LikeClick()}>remove Likes</div>
  </>
  }
  else
  {
  if(islikenull==null)
  {
    return<>
  <div onClick={()=>FavoriteClick()}>remove Favorites</div>
  <div onClick={()=>LikeClick()}>add Likes</div>
  </>
  }
  return<>
  <div onClick={()=>FavoriteClick()}>remove Favorites</div>
  <div onClick={()=>LikeClick()}>remove Likes</div>
  </>
}*/
  /*if(isfavnull==null)
  {
  return<>
  <div onClick={()=>onSubmit()}>add Favorites</div>
  </>
  }
  
  return<>
  <div onClick={()=>onSubmit()}>remove Favorites</div>
  </>*/
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
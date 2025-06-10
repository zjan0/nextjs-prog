"use client"
import {useSession} from "next-auth/react";
import {addFavorites, Isfavnull} from "./AddFavorites"
import { useEffect, useState } from "react";
import {addLikes,Islikenull} from "./AddLike"
type FavoritesProps = {
  val: string;  // val can be string or undefined (if it might be missing)
};
export default function Favorites({ val }: FavoritesProps)
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
  let favvalue="remove";
  let likevalue="remove";
  const[isfavnull,setfavNull]=useState("")
  const[islikenull,setlikeNull]=useState("")
  const{data: session}=useSession();
  let username="";
  if(session?.user?.name!=null)
  {
  username=session?.user?.name;
  }
  //const {val}=value;
  console.log("testing");
  console.log(val);
  useEffect(()=>{
          (async()=>{
            const isfavitnull=await Isfavnull(val,username);
            const islikeitnull=await Islikenull(val,username);
            if(isfavnull!=null)
            {
              //favvalue="remove";
              setfavNull(isfavitnull?.song_name??"");
            }
            //else{setfavNull("");}
            if(islikenull!=null)
            {
              //likevalue="remove";
              setlikeNull(islikeitnull?.song_name??"");
            }
            //setfavNull(isfavitnull.song_name);
            //setlikeNull(islikeitnull);
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
  if(isfavnull=="")
  {
    favvalue="add";
  }
  if(islikenull=="")
  {
    likevalue="add";
  }
  const FavoriteClick=()=>{addFavorites(val,username)}
  const LikeClick=()=>{addLikes(val,username)}
  /*return<>
  <div onClick={()=>FavoriteClick()}>add Favorites</div>
  <div onClick={()=>LikeClick()}>add Likes</div>
  </>*/
  /*let favvalue="remove";
  let likevalue="remove";
  if(isfavnull==null)
  {
    favvalue="add";
  }
  if(islikenull==null)
  {
    likevalue="add";
  }*/
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
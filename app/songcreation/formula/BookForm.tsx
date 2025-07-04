"use client"
import { useState } from "react"
import { creation } from "../creation/creation"
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function BookForm () {
    const{data: session}=useSession();

    const [name,setName]=useState("")
    const [author,setAuthor]=useState("")
    const [type,setType]=useState("")

const onSubmit=()=>{ 
    //console.log(name)
    creation(name,author,type)
    return
}
if(!session)
    {
        redirect("../login");
    }
return  <form method="get">
<div>
    <label>song name</label>
    <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
</div>
<div>
    <label>song author</label>
    <input type="text" value={author} onChange={e => setAuthor(e.target.value)}></input>
</div>
<div>
    <label>song type</label>
    <input type="text" value={type} onChange={e => setType(e.target.value)}></input>
</div>
<div>
    <a href="../">
<button  name="song_creation" type="button" onClick={onSubmit}>create song</button>
</a>
</div>
</form>

}
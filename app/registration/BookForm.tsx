"use client"
import {useState} from "react";
import{registrate} from "../registrate/registrate";
export default function BookForm()
{
    const[username,SetUsername]=useState("")
    const[password,SetPassword]=useState("")
const onSubmit=()=>{
    registrate(username,password)
}
return <form method="get">
    <div>
        <label>username</label>
        <input type="text" value={username} onChange={e => SetUsername(e.target.value)}></input>
    </div>
    <div>
        <label>password</label>
        <input type="text" value={password} onChange={e => SetPassword(e.target.value)}></input>
    </div>
    <div>
    <a href="../">
    <button  name="registration" type="button" onClick={onSubmit}>create song</button>
    </a>
    </div>
</form>
}
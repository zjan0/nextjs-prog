"use client"
import {useState} from "react";
import{registrate} from "../registrate/registrate";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
export default function BookForm()
{
    const{data: session}=useSession();
    const[username,SetUsername]=useState("")
    const[password,SetPassword]=useState("")
    const[error,setError]=useState("")
const onSubmit=()=>{
    if(!username||!password)
    {
        setError("missing info");
    }
    else
    {
        setError("right info");
        registrate(username,password)
        return;
        
    }

}
if(session)
    {
        redirect("../");
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
    {error&&(<div>{error}</div>)}
    <div>
    {error&&(<button  name="registration" type="button" onClick={onSubmit}>registrate</button>)}
    {!error&&(
    <button  name="registration" type="button" onClick={onSubmit}>registrate</button>
    )}
    </div>
</form>
}
/*<a href="../">
    <button  name="registration" type="button" onClick={onSubmit}>registrate</button>
    </a>*/
    /*{error&&(<button  name="registration" type="button" onClick={onSubmit}>registrate</button>)}
    {!error&&(<button  name="registration" type="button" onClick={onSubmit}>registrate</button>)}*/
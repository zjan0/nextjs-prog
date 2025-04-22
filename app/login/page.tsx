//import Route from "../api/auth/[...nextauth]/route";
/*export default function login()
{
    return <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>login</h1>
        <form action="">
            <div>
                <label>username</label>
                <input type="text"></input>
            </div>
            <div>
                <label>password</label>
                <input type="text"></input>
            </div>
            <button name="login" type="submit">login</button>
        </form>
        <div>
            <a href="registration"><button name="registrate">registrate</button></a>
        </div>
        <div>
            <a href="../">back</a>
        </div>
    </div>
</div>
        
}*/
"use client"
import {useState} from "react";
import {signIn} from "next-auth/react";
export default function Login()
{
    const[username,SetUsername]=useState("")
    const[password,SetPassword]=useState("")
    const[error,setError]=useState("")
const onSubmit=async()=>{
    if(!username||!password)
    {
        setError("missing info");
    }
    else
    {
        //await signIn("credentials",{username,password})
        //console.log(username,password);
        await signIn("credentials",{username,password})
        /*if(rightinfo)
        {
            session?.user;
        }
        else{session?.expires}*/
        setError("right info");
    }
}
return <form method="get">
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
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
    {error&&(<button  name="login" type="button" onClick={onSubmit}>login</button>)}
    {!error&&(<button  name="login" type="button" onClick={onSubmit}>login</button>)}
    </div>
    <div>
    <a href="registration">registrate</a>
        </div>
        <div>
            <a href="../">back</a>
        </div>
    </div></div>
</form>
}
/*<a href="../">
    <button  name="login" type="button" onClick={onSubmit}>login</button>
    </a>*/
    /*{error&&(<button  name="login" type="button" onClick={onSubmit}>login</button>)}
    {!error&&(<button  name="login" type="button" onClick={onSubmit}>login</button>)}*/

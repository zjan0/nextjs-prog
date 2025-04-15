"use client"
import {signOut,useSession} from "next-auth/react";
export default function PagesMenu()
{
    const{data: session}=useSession();
    if(session)
    {
        return(<>
        <h1>signed in</h1>
        <button onClick={()=>signOut()}>signout</button>
        </>)
    }
    return<>
    <h1>not signed</h1>
        <a href="login">login</a>
        <a href="registration">registrate</a>
        </>
}
//<button onClick={()=>signOut()}>SignOut</button>
//<button onClick={()=>signIn()}>SignIn</button>

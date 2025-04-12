"use client"
import {signIn,signOut,useSession} from "next-auth/react";
export default function PagesMenu()
{
    const{data: session}=useSession();
    if(session)
    {
        return(<>
        <h1>signed in</h1>
        </>)
    }
    return<>
    <h1>not signed</h1>
        <a href="login">login</a>
        <button onClick={()=>signIn()}>SignIn</button>
        </>
}
//<button onClick={()=>signOut()}>SignOut</button>
//<button onClick={()=>signIn()}>SignIn</button>

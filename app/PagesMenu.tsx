"use client"
import {signOut,useSession} from "next-auth/react";
export default function PagesMenu()
{
    const{data: session}=useSession();
    //console.log("testing");
    //console.log(session);
    //console.log();
    if(session)
    {
        return(<>
        <h1>signed in</h1>
        <a href="songcreation/formula">song creation</a>
        <a href="list">list</a>
        <button onClick={()=>signOut()}>signout</button>
        <a href="ownlist">own list</a>
        </>)
    }
    return<>
    <h1>not signed</h1>
    <a href="ownlist">own list</a>
    <a href="list">list</a>
    <a href="login">login</a>
    <a href="registration">registrate</a>
    </>
}
/*<a href="list">list</a>*/
//<button onClick={()=>signOut()}>SignOut</button>
//<button onClick={()=>signIn()}>SignIn</button>

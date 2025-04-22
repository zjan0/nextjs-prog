'use client'
import Songs from '../../[song]/page'
export default function Nav({val}:any)
{
    return<>
    <a href={val} onClick={()=>invalidate(val)}>
      {val}
    </a>
    </>
}
function invalidate(value:any)
    {
        //console.log(value);
        //console.log("testing")
        //Songs((value));
        //console.log(value);
        //Listing(value);
        //Listing(value);
        //console.log(value.song_name)
    }
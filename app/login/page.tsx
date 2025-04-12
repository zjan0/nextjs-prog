//import Route from "../api/auth/[...nextauth]/route";
export default function login()
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
        
}
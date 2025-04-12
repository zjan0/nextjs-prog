import BookForm from "./BookForm";
export default function registration()
{
    return <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>registration</h1>
           <BookForm />
           <div>
            <a href="login"><button name="login">login</button></a>
        </div>
        <div>
            <a href="../">back</a>
        </div>
    </div>
</div>
}

import Listing from "./src/Listing";
/*export default*/ function list()
{
    //console.log("test");
    return <>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    <Listing/>
    <div>
            <a href="../">back</a>
        </div>
    </div>
    </div>
    </>
}
export default list
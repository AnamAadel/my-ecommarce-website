import { useStateContext } from "@/context/useStateContext";

function SearchBox({handleSearchBx}) {
    const {handleSearchInput, suggestions, pickInputValue, searchIinput} = useStateContext();
  return (
    <>
        <section className="w-full h-full flex justify-center items-start pt-24 fixed top-0 left-0 z-50">
        <div className="absolute top-0 left-0 bg-[rgba(68,55,55,0.4)] w-full h-full z-[-1]" onClick={handleSearchBx} ></div>
        <div className=' w-[40%] bg-sweet-yellow border p-4 space-y-1'>
            <div className="w-full flex justify-stretch m-auto"><input type="text" placeholder='Search' className='flex-grow p-1 font-medium border-0 bg-white' value={searchIinput} onChange={(e)=> handleSearchInput(e.target.value)} autoFocus /><button className='py-1 px-8 bg-zinc-950 text-white'>Search</button></div>
            <ul className="w-full space-y-1 overflow-auto max-h-[20rem]">
            {suggestions.map((item)=> (
                <li className="px-2 py-1 font-medium bg-white border text-[0.8rem] hover:bg-stone-600 hover:text-white cursor-pointer" onClick={()=> pickInputValue(item)}>{item}</li>

            ))}
            </ul>
        </div>
    </section>
    </>
  )
}

export default SearchBox
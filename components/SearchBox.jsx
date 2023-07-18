
import { useStateContext } from "@/context/useStateContext";

function SearchBox({handleSearchBx}) {
    const {handleSearchInput, suggestions, pickInputValue, searchIinput, handleArrowKey, trackIndex} = useStateContext();
  return (
    <>
        <section className="w-full h-full flex justify-center items-start pt-24 fixed top-0 left-0 z-50">
        <div className="absolute top-0 left-0 bg-[rgba(68,55,55,0.4)] w-full h-full z-[-1]" onClick={handleSearchBx} ></div>
        <div className='w-[80%] sm:max-w-[400px] bg-sweet-yellow border p-4 space-y-1' onKeyUp={handleArrowKey}>
            <div className="w-full flex flex-wrap gap-4 sm:gap-0 justify-center sm:justify-stretch m-auto"><input type="text" placeholder='Search' className='flex-grow p-1 font-medium border-0 bg-white' value={searchIinput} onChange={(e)=> handleSearchInput(e)} autoFocus /><button className='py-1 px-8 bg-zinc-950 text-white'>Search</button></div>
            <ul className="w-full space-y-1 overflow-auto max-h-[20rem]">
            {suggestions.map((item, ind)=> (
                <li className={`px-2 py-1 font-medium bg-white border text-[0.8rem] ${trackIndex == ind && "border-gray-500 border-2"} hover:bg-stone-600  hover:text-white cursor-pointer`} onClick={()=> pickInputValue(item)} key={ind} >{item}</li>

            ))}
            </ul>
        </div>
    </section>
    </>
  )
}

export default SearchBox
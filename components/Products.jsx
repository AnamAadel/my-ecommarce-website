import { useStateContext } from "@/context/useStateContext";
import useAuth from "@/hook/useAuth";
import { client } from "@/lib/client";
import Link from "next/link";
import { useState } from "react";



let numArray = [1,1];
function Products() {
  const [visibleItems, setVisibleItems] = useState(4);
  const [inputValue, setInputValue] = useState(3);
  const [hideItems, setHideItems] = useState(0);
  
  const [sortItems, setSortItems] = useState();

  const {curUser} = useAuth();
  
  

  const {products} = client;
  const {searchItem, setSearchItem, filteredItems, setFilteredItems, showFilterItems, setShowFilterItems} = useStateContext();
  const pageArray = [];
  
  for(let i = 0; i < Math.floor((!showFilterItems? products.length : filteredItems.length) / inputValue) - !showFilterItems && (inputValue == 3? + 1 : - 1); i++){
    searchItem.length < 1 && pageArray.push(i)
  }

  for(let i = 0; i < Math.floor((!showFilterItems? searchItem.length : filteredItems.length) / inputValue); i++){
    searchItem.length  >= 1 && pageArray.push(i)
  }


  const handleFilterMenu = (value)=>{
    setShowFilterItems(true)
    setFilteredItems([...products.filter((item,index)=>{
      return item.catagory.find((name)=> name) == value;
    })])
  }
  
  const handleSortItems = (e)=>{
    setSortItems(e.target.value);
    
    if(e.target.value === "random"){
      products.sort((a,b)=> 0.5 - Math.random());
      filteredItems.sort((a,b)=> 0.5 - Math.random());
    }else if(e.target.value === "descending"){
      products.sort((a,b)=> parseFloat(b.price) - parseFloat(a.price));
      filteredItems.sort((a,b)=> parseFloat(b.price) - parseFloat(a.price));
    }else if(e.target.value === "ascending"){

      products.sort((a,b)=> parseFloat(a.price) - parseFloat(b.price));
      filteredItems.sort((a,b)=> parseFloat(a.price) - parseFloat(b.price));
    }
  }

  const handleVisibleItems = (e)=>{
    setVisibleItems(visibleItems + parseFloat(e.target.value) -inputValue)
    setInputValue(parseFloat(e.target.value))
    setSearchItem([])
  }

  const handlePage = (num, page)=>{
    // create array include two items & compere between them
    if(page === "next"){
      num += 1;
    }
    else if(page === "prev"){
      num -= 1;
    }

    numArray.push(num);
    numArray.shift(num);
    if(numArray[0] == numArray[1]) return
    if(numArray[0] < numArray[1]){
      setHideItems(((inputValue + 1) * num) - ( inputValue + 1));
      setVisibleItems((inputValue + 1) * num)
    }else{
      setHideItems(((inputValue + 1) * num) - ( inputValue + 1));
      setVisibleItems((inputValue + 1) * num)
      
      
    }
    // setInputValue(inputValue + (pagination * num))
    
  }
  return (
    <div className="flex flex-col items-center py-[4rem] overflow-hidden">
        {/* functional section */}
        <header
          className="flex justify-center items-center w-full bg-light-pink py-[3.5rem]"
        >
          <div className="m-auto w-[90%] flex flex-col lg:flex-row justify-between items-center gap-[1.5rem]" >
            {/* left side */}
            <div
              className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-10"
            >
              {/* filter part */}
              <div className="flex gap-3 border-r-2 pr-5 border-gray-500 cursor-pointer">
                <div className="flex gap-3 relative cursor-pointer group">
                  <img
                    src="./assets/system-uicons_filtering.svg"
                    alt=""
                  />
                  <span>Filter</span>
                  <div className="fit-content bg-white text-center text-[1rem] space-y-2 flex-col whitespace-nowrap absolute top-full left-8 border capitalize rounded-md py-4 hidden group-hover:flex">
                    <button className="hover:bg-sweet-yellow px-4 font-medium capitalize" onClick={()=> setShowFilterItems(false)}>default</button>
                    <button className="hover:bg-sweet-yellow px-4 font-medium capitalize" onClick={()=> handleFilterMenu("table")}>table</button>
                    <button className="hover:bg-sweet-yellow px-4 font-medium capitalize" onClick={()=> handleFilterMenu("sofa")}>sofa</button>
                    <button className="hover:bg-sweet-yellow px-4 font-medium capitalize" onClick={()=> handleFilterMenu("dining table")}>dining table</button>
                    <button className="hover:bg-sweet-yellow px-4 font-medium capitalize" onClick={()=> handleFilterMenu("dining chair")}>dining chair</button>
                    <button className="hover:bg-sweet-yellow px-4 font-medium capitalize" onClick={()=> handleFilterMenu("almirah")}>almirah</button>
                  </div>
                </div>
                <img src="./assets/ci_grid-big-round.svg" alt="" />
                <img src="./assets/bi_view-list.svg" alt="" />
              </div>
              {/* show current items amount */}
              <p className="ml-10">Showing 1– {hideItems < (products.length - products.length % 4) ? visibleItems : products.length } of {products.length}  results</p>
            </div>
            {/* right side */}
            <div
              className="flex flex-wrap sm:flex-nowrap gap-10 justify-center items-center"
            >
            {/* show certain amount of items */}
              <div className="space-x-4">
                <label for="show">Show</label>
                <select id="short" className="h-[3.4375rem] px-4 appearance-none" value={inputValue} onChange={handleVisibleItems}>
                  <option value="3">4</option>
                  <option value="7">8</option>
                  <option value="11">12</option>
                  <option value="15">16</option>
                </select>
              </div>
              {/* short items */}
              <div className="space-x-4">
                <label for="short">Sort By</label>
                <select id="short" className="h-[3.4375rem] px-4 appearance-none" onClick={handleSortItems} >
                  <option value="true">Default</option>
                  <option value="descending">Price Descending</option>
                  <option value="ascending">Price Ascending</option>
                  <option value="random">Price Randomly</option>
                </select>
              </div>
            </div>
          </div>
        </header>
        {/* show product section */}
        <div className="flex flex-wrap w-[90%] justify-start items-center">
        {searchItem.length >= 1 && filteredItems.length < 1 ? searchItem.slice(hideItems ,visibleItems).map((product,index)=>(
              <Link href={`/${curUser? product.id : "MyAcount"}`}
                className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center md:items-start group"
                key={product.id}
              >
                <img
                  src={product.image[0]}
                  alt="square-side-table"
                  className="w-full h-[17.9375rem] object-contain transition-all group-hover:scale-125"
                />
                <p className="text-[1rem] font-light">{product.name}</p>
                <p type="button" className="text-[1.5rem] font-medium mt-[1rem]">
                  Rs. {product.price}
                </p>
              </Link>
        )) 
        :      
        filteredItems.length < 1 ? products.slice(hideItems ,visibleItems).map((product,index)=>(
              <Link href={`/${curUser? product.id : "MyAcount"}`}
                className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center md:items-start group"
                key={product.id}
              >
                <img
                  src={product.image[0]}
                  alt="square-side-table"
                  className="w-full h-[17.9375rem] object-contain transition-all group-hover:scale-125"
                />
                <p className="text-[1rem] font-light">{product.name}</p>
                <p type="button" className="text-[1.5rem] font-medium mt-[1rem]">
                  Rs. {product.price}
                </p>
              </Link>
        ))
        :
         filteredItems.slice(hideItems ,visibleItems).map((product,index)=>(
          <Link href={`/${curUser? product.id : "MyAcount"}`}
                className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center md:items-start group"
                key={product.id}
              >
                <img
                  src={product.image[0]}
                  alt="square-side-table"
                  className="w-full h-[17.9375rem] object-contain transition-all group-hover:scale-125"
                />
                <p className="text-[1rem] font-light">{product.name}</p>
                <p type="button" className="text-[1.5rem] font-medium mt-[1rem]">
                  Rs. {product.price}
                </p>
              </Link>
        ))

        }
          
        </div>
        {/* pagination */}
        <div className="flex mt-10 gap-8">
         {hideItems > 1? <button className="py-2 px-4 bg-light-pink hover:bg-sweet-yellow rounded-lg" onClick={()=> handlePage(numArray[1], "prev")}>prev</button> :<button></button>} 

         {pageArray.map((page, index)=>(
          <button
            className={`py-2 px-4 bg-light-pink ${(index + 1) == numArray[1]? "bg-sweet-yellow" : null }  hover:bg-sweet-yellow rounded-lg`}
            onClick={()=> handlePage(index + 1, null)}
            key={index}
          >
            {index + 1}
          </button>

         ))}
          {pageArray.length > numArray[1]? <button
            className="py-2 px-4 bg-light-pink hover:bg-sweet-yellow rounded-lg"
            onClick={()=> handlePage(numArray[1], "next")}>
            Next
          </button> : <button></button>}
          
        </div>
      </div>
  )
}

export default Products
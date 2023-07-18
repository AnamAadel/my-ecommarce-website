import { products } from '@/pages/api/client';
import { useRouter } from 'next/router';
import { createContext, useContext, useState } from 'react';


const Context = createContext();

let totalItems
export function StateContext({children}) {

  const [totalPrice, setTotalPrice] = useState(0);
  const [trackIndex, setTrackIndex] = useState();
  const [trackKey, setTrackKey] = useState();
  // const {products} = client;
  const router = useRouter();
  const [cartItems , setCartItems] = useState([]);
  const [suggestions , setSuggestions] = useState([]);
  const [searchIinput, setSearchIinput] = useState("");
  const [searchItem, setSearchItem] = useState([]);
  const [showSearchBx, setShowSearchBx] = useState(false);
  const [showFilterItems, setShowFilterItems] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);

  let searchArray = [];

  const removeItems = (index)=>{
    
    setCartItems(cartItems.filter((item,ind)=> ind !== index))
  }
    
   const addToCart = (product, qty)=>{
      
     const newItems = cartItems.filter((item)=> item.id !== product.id);
     product.quentity = qty;
     setCartItems([...newItems, product]);
    
      // console.log(findProduct.every((item)=> item.id === product.id))
      ;
    }
  
  const manageArrayForSearch = ()=>{
    let productName = products.map((item)=>{
      return item.name
    })
    
    let categoryName = [];
    products.forEach((item)=>{
      item.catagory.forEach((item)=>{
        categoryName.push(item);
      })
    })

    productName = productName.filter((item, i , array)=> array.indexOf(item) === i);
    categoryName = categoryName.filter((item, i , array)=> array.indexOf(item) === i);
    
    searchArray = [...productName, ...categoryName];
  }
  
  manageArrayForSearch()
  
  const handleSearchInput = (value)=>{
    setSearchIinput(value.target.value);
    if(value.target.value.length >= 1){
        setSuggestions(searchArray.filter((item)=>{
          return item.toLocaleLowerCase().startsWith(value.target.value.toLocaleLowerCase())
        }))

    }else{
      setSuggestions([]);
    }


  }

  const handleSearchBx = ()=>{
    setShowSearchBx(false);
  }

  const pickInputValue = (value)=>{
    if(products.some((item)=> item.name == value.toString())){
      setSearchItem(products.filter((item)=> item.name == value))
      router.push(`/${products.filter((item)=> item.name == value)[0].id}`);
    }else{
      setSearchItem(products.filter((item)=> item.catagory.find((item)=> item) == value))
      
      router.push(`/shop`);
    }
    setSuggestions([]);
    setShowFilterItems(false);
    setFilteredItems([]);
    setSearchIinput("");
    handleSearchBx();

  }

  const handleArrowKey = (e)=> {
    setTrackKey(e.key)
    if(e.key === "ArrowUp" || e.key === "ArrowDown" || suggestions.length == 0){
      
      setTrackIndex(0);
    }

    if(e.key === "ArrowUp"){
      
      if(trackIndex > 0){
        setTrackIndex(trackIndex - 1)
      }
     
    }
    
    if(e.key === "ArrowDown"){
      if(trackIndex < suggestions.length - 1){
        setTrackIndex(trackIndex + 1)
        
      }

    }

    if(e.key === "Enter"){
      pickInputValue(suggestions[trackIndex]);
    }

    console.log(trackIndex);
  }

  

//   useEffect(()=>{
//     document.addEventListener("keyup",(e)=>{
//       handleArrowKey(e);
//     })
// },[handleArrowKey])


  return (
    <Context.Provider value={{
      cartItems, 
      totalPrice, 
      handleSearchInput, 
      handleSearchBx, 
      showSearchBx, 
      setShowSearchBx, 
      suggestions, 
      addToCart, 
      removeItems, 
      pickInputValue, 
      searchItem, 
      setSearchItem,
      filteredItems,
      setFilteredItems,
      showFilterItems,
      setShowFilterItems,
      handleArrowKey,
      trackIndex,
      searchIinput}} >
        {children}
    </Context.Provider>
  )
}

// export StateContext

export const useStateContext = ()=> useContext(Context)
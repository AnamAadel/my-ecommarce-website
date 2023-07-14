import { client } from '@/lib/client';
import { useRouter } from 'next/router';
import { createContext, useContext, useState } from 'react';


const Context = createContext();

let totalItems
export function StateContext({children}) {

  const [totalPrice, setTotalPrice] = useState(0);
  const {products} = client;
  const router = useRouter();
  const [cartItems , setCartItems] = useState([]);
  const [suggestions , setSuggestions] = useState([]);
  const [searchIinput, setSearchIinput] = useState();
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
    setSearchIinput(value);
    if(value.length >= 1){
        setSuggestions(searchArray.filter((item)=>{
          return item.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
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
      searchIinput}} >
        {children}
    </Context.Provider>
  )
}

// export StateContext

export const useStateContext = ()=> useContext(Context)
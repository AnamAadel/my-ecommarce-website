'use client';
import { useStateContext } from '@/context/useStateContext';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import AddtoCart from './AddtoCart';
import SearchBox from './SearchBox';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [showAddCart, setShowAddCart] = useState(false);
    const menuBox = useRef();
    const nav = useRef();

    const {cartItems, handleSearchBx, showSearchBx, setShowSearchBx} = useStateContext();

    const totalQty = ()=> {
      if(cartItems.length <=1){
        return cartItems[0] && cartItems[0].quentity;
        
      }else {
        return cartItems.map((item)=> parseFloat(item.quentity) ).reduce((a , b)=> parseFloat(a) + parseFloat(b))
      }
    }

    useEffect(()=>{
      window.addEventListener("scroll",function(){
        let scrolling = window.scrollY;

        if(scrolling > 400){
          nav.current && nav.current.classList.remove('absolute');
          nav.current && nav.current.classList.add('fixed');
          nav.current && nav.current.classList.add('h-[3.25rem]');
          nav.current && nav.current.classList.remove('h-[6.25rem]');
          nav.current && nav.current.classList.add('bg-sweet-yellow');
        }else{
          nav.current && nav.current.classList.add('absolute');
          nav.current && nav.current.classList.remove('fixed');
          nav.current && nav.current.classList.remove('h-[3.25rem]');
          nav.current && nav.current.classList.add('h-[6.25rem]');
          nav.current && nav.current.classList.remove('bg-sweet-yellow');

        }
      })
    })

    const handleMenu = () => {
      if(!showMenu){
        menuBox.current.classList.remove("hidden");
        menuBox.current.classList.add("flex");
        setShowMenu(true);
      }else{
        menuBox.current.classList.add("hidden");
        menuBox.current.classList.remove("flex");
        setShowMenu(false);

      }
    }
  //  handle search box 

  


  // handle add to cart
  const handleAddCart = ()=>{
    setShowAddCart(false);
  }
  return (
    <>
    <header className="flex justify-center w-full absolute top-0 h-[6.25rem] z-40" ref={nav}>
      <nav
        className="flex w-[90%] h-full gap-[30px] justify-between items-center relative"
      >
        <Link href="/"
          ><img src="./assets/Meubel House_Logos-05.png" alt=""
        /></Link>
        <div className="gap-[1rem] sm:gap-[70px] flex items-center">
          <ul
            className="hidden lg:flex flex-col lg:flex-row gap-[1.59rem] lg:gap-[4.59rem] text-[1rem] absolute top-[100%] lg:relative lg:top-[0%] left-0 bg-sweet-yellow lg:bg-transparent lg:h-fit p-[2rem] lg:py-0  border-b-2 lg:border-0 border-black font-medium w-full lg:w-fit"
            ref={menuBox}
          >
            <li><Link href="/" onClick={handleMenu}>Home</Link></li>
            <li><Link href="/shop" onClick={handleMenu}>Shop</Link></li>
            <li><Link href="/blog" onClick={handleMenu}>Blog</Link></li>
            <li><Link href="/contact" onClick={handleMenu}>Contact</Link></li>
          </ul>
          
          <span className="block lg:hidden text-[1.5rem] cursor-pointer" onClick={handleMenu}>{showMenu? <AiOutlineClose />  : <AiOutlineMenu />} </span>
          <ul className="flex gap-[1rem] sm:gap-[2.25rem]">
            <li>
              <img
                src="./assets/mdi_account-alert-outline.svg"
                alt="user"
                className="w-[1.75] h-[1.75]"
              />
            </li>
            <li onClick={()=> setShowSearchBx(true)} >
              <img
                src="./assets/akar-icons_search.svg"
                alt="search"
                className="w-[1.75] h-[1.75] cursor-pointer"
              />
            </li>
            <li>
              <img
                src="./assets/akar-icons_heart.svg"
                alt="heart"
              />
            </li>
            <li className='relative' onClick={()=> setShowAddCart(true)}>
              <img
                src="./assets/ant-design_shopping-cart-outlined.svg"
                alt="shopping cart"
                className="w-[1.75] h-[1.75] block cursor-pointer"
                
              />
              <span className='absolute px-1 -top-1 inline-block -right-1 bg-red-400 rounded-xl text-white text-[.6rem]' >{totalQty()}</span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    {showAddCart && <AddtoCart handleAddCart={handleAddCart} />}
    
    {showSearchBx && <SearchBox handleSearchBx={handleSearchBx} />}


    </>
  )
}

export default Navbar
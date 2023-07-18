'use client';
import { useStateContext } from '@/context/useStateContext';
import app from '@/firebase';
import useAuth from '@/hook/useAuth';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import AddtoCart from './AddtoCart';
import SearchBox from './SearchBox';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [showAddCart, setShowAddCart] = useState(false);
    const menuBox = useRef();
    const nav = useRef();
    const uplodFile = useRef();
    const profileBox = useRef();

    const router = useRouter();
    
    const {curUser, logout} = useAuth();
    const [userUrl, setUserUrl] = useState("");


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

      
      if(curUser){
        
        const storage = getStorage(app);
        const imageRef = ref(storage, `images/${curUser.uid}/${curUser.uid}`);
  
        getDownloadURL(imageRef).then((url) =>{
            setUserUrl(url);
  
          }).catch((err)=>{
            console.log(err)
          })
      }

    },[curUser])

    // menu show and hide function
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

    // profile show and hide function
    const handleProfileMenu = () => {
      if(!showProfileMenu){
        profileBox.current.classList.remove("hidden");
        profileBox.current.classList.add("block");
        setShowProfileMenu(true);
      }else{
        profileBox.current.classList.add("hidden");
        profileBox.current.classList.remove("block");
        setShowProfileMenu(false);

      }
      
    }

    // uplodfile function
    const handleUplodFile = (e)=>{
      uplodFile.current.click();

      const storage = getStorage(app);
      const imageRef = ref(storage, `images/${curUser.uid}/${curUser.uid}`);

      if(e.target.files && e.target.files[0]){
        
         uploadBytes(imageRef, e.target.files[0])

        getDownloadURL(imageRef).then((url) =>{
          
          setUserUrl(url);
          router.reload();
          
          
        }).catch((err)=>{
          alert(err)
        })
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
            <li><Link href="/MyAcount" onClick={handleMenu}>My Acount</Link></li>
            <li><Link href="/contact" onClick={handleMenu}>Contact</Link></li>
          </ul>
          
          <span className="block lg:hidden text-[1.5rem] cursor-pointer" onClick={handleMenu}>{showMenu? <AiOutlineClose />  : <AiOutlineMenu />} </span>
          <ul className="flex justify-center gap-[1rem] sm:gap-[2.25rem]">
            <li className='relative cursor-pointer' onClick={handleProfileMenu}>
              <img
                src={`${userUrl? userUrl : "./assets/mdi_account-alert-outline.svg"}`}
                alt="user"
                className="w-[2rem] h-[2rem] rounded-[50%] object-cover"
              />
              <div className='w-[12rem] shadow-lg p-4 absolute top-[150%] left-[50%] translate-x-[-50%] bg-sweet-yellow rounded-2xl text-center hidden' ref={profileBox} >
                {userUrl? <Image src={`${userUrl}`} width={100} height={100} alt='user image' className='rounded-[50%] m-auto w-[100px] h-[100px] object-cover' /> : <BiSolidUserCircle className='m-auto text-[5rem] hover:text-slate-400 cursor-pointer' onClick={curUser &&  handleUplodFile} /> }
                <input type="file" accept="image/*" ref={uplodFile} onChange={handleUplodFile} className="hidden"/>
               {curUser && <button type='button' className='bg-black text-white px-10 py-1 rounded-md font-medium hover:bg-slate-400 mt-4' onClick={handleUplodFile}>Uplod</button>}
                <ul className='space-y-2 mt-2 font-medium'>
                  <li className='font-bold'><span className='font-medium'>Name:</span> {curUser? curUser.displayName : `none`}</li>
                  {curUser? <li className='hover:bg-black hover:text-white bg-gray-400' onClick={logout}>Logout</li>:
                  <li className='hover:bg-black hover:text-white bg-gray-400 capitalize'><Link href="/MyAcount">login or Register</Link> </li>
                  }
                  
                </ul>
              </div>
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
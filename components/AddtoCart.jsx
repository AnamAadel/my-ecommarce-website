import { useStateContext } from "@/context/useStateContext";
import Link from "next/link";
import { AiFillShopping } from "react-icons/ai";

function AddtoCart({handleAddCart}) {
  const {cartItems, totalPrice, removeItems} = useStateContext();

  const subTotal = ()=> {
    if(cartItems.length <=1){
      return cartItems[0] && cartItems[0].price * cartItems[0].quentity;
      
    }else {
      return cartItems.map((item)=> parseFloat(item.price) * parseFloat(item.quentity) ).reduce((a , b)=> parseFloat(a) + parseFloat(b))
    }
  }
  return (
    <div className="w-full h-screen fixed top-0 left-0 z-50">
        <div className="w-full h-full bg-black-overlay" onClick={handleAddCart}>x</div>
        <div
          className="absolute top-0 right-0 bg-white w-full sm:w-[27rem] h-[90vh] flex flex-col"
        >
          <header className="flex gap-[1.62rem] mb-2 p-4">
            <h4
              className="w-full py-4 border-b-2 border-gray-500 font-semibold text-[1.5rem]"
            >
              Shopping Cart
            </h4>
            <img
              src="./assets/cloase.svg"
              alt="close"
              className="w-[1.03906rem] p-3 box-content cursor-pointer"
              onClick={handleAddCart}
            />
            
          </header>
          <div className="overflow-y-auto p-4 space-y-2">
          {cartItems.map((item,index)=>(
            <div className="flex justify-between gap-3" key={item.id}>
            <Link href={`/${item.id}`} className="flex gap-4 items-center" onClick={handleAddCart} >
              <div className="w-1/5 bg-sweet-yellow overflow-hidden rounded-md">
                <img
                  src={item.image[0]}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="space-y-2">
                <h4>{item.name}</h4>
                <p className="flex gap-2 items-center">
                  <span>{item.quentity}</span>
                  <span>x</span>
                  <span className="text-[#B88E2F]">Rs. {item.price * item.quentity}.00</span>
                </p>
              </div>
            </Link>
              <button onClick={()=> removeItems(index)}>
                <img src="./assets/item_close.svg" alt="" className="w-[3.5rem]" />
              </button>

            </div>
          ))}
          {cartItems.length < 1 && (
            <div className="w-full h-full flex justify-center items-center flex-col">
              <AiFillShopping className="text-[6rem] text-yellow-600" />
              <h4 className="text-[1.4rem] capitalize font-medium">Shopping cart is empty</h4>
            </div>
            
          )}
          </div>
          <footer className="mt-auto">
            <div
              className="flex justify-between items-center p-4 border-b-2 border-gray-500"
            >
              <h4 className="text-[1.5rem] font-semibold">Subtotal</h4>
              <span className="text-[#B88E2F]">Rs. {subTotal()}.00</span>
            </div>
            <div className="flex justify-start gap-10 items-center p-4 border-b-2">
              <Link href='/Cart' onClick={handleAddCart}
                className="text-[0.75rem] flex justify-center items-center w-[8.1875rem] h-[1.9375rem] rounded-3xl border-2 border-gray-700 hover:bg-sweet-yellow"
              >
                View Cart
              </Link>
              <Link href="/Checkout" onClick={handleAddCart}
                className="text-[0.75rem] flex justify-center items-center w-[8.1875rem] h-[1.9375rem] rounded-3xl border-2 border-gray-700 hover:bg-sweet-yellow"
              >
                Checkout
              </Link>
            </div>
          </footer>
        </div>
    </div>
  )
}

export default AddtoCart
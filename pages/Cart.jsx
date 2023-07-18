import Facilities from "@/components/Facilities";
import HeroBanner from "@/components/HeroBanner";
import { useStateContext } from "@/context/useStateContext";

function Cart() {
  const {cartItems} = useStateContext();

  const subTotal = ()=> {
    if(cartItems.length <=1){
      return cartItems[0] && cartItems[0].price * cartItems[0].quentity;
      
    }else {
      return cartItems.map((item)=> parseFloat(item.price) * parseFloat(item.quentity) ).reduce((a , b)=> parseFloat(a) + parseFloat(b))
    }
  }
  return (
    <>
        <HeroBanner pageName="Cart" />
          <div
          className="flex flex-wrap md:flex-nowrap w-[90%] m-auto gap-4 py-[4.12rem]"
        >
          <div className="w-full md:w-[60%] overflow-auto space-y-[2.25rem]">
            <table className="table-fixed">
              <thead>
                <tr className="bg-light-pink">
                  <th className="p-4">Product</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Subtotal</th>
                </tr>
              </thead>
              <tbody className="border-spacing-4">
                {cartItems.map((item)=>(
                  <tr key={item.id}>
                    <td className="flex gap-4 items-center mt-4">
                      <div className="w-[6rem] sm:w-1/2 bg-sweet-yellow">
                        <img
                          src={item.image[0]}
                          alt=""
                          className="w-full sm:h-full"
                        />
                      </div>
                      <p className="text-gray-500">{item.name}</p>
                    </td>
                    <td>Rs. {item.price}.00</td>
                    <td className="text-center">
                      <span className="p-2 px-4 border-2 rounded-xl">{item.quentity}</span>
                    </td>
                    <td>Rs. {item.price * item.quentity}.00</td>
                  </tr>

                ))}
              </tbody>
            </table>
          </div>
          <div
            className="flex flex-col items-center p-3 bg-light-pink w-full md:w-[40%] space-y-[2.25rem]" >
            <h3 className="text-[2.25rem] font-semibold">Cart Totals</h3>

            <ul className="w-full space-y-5 pb-5" >
              <li className="font-medium flex justify-between">
                <span>Subtotal</span>
                <span className="text-black">Rs. {subTotal()}.00</span>
              </li>
              <li className="font-medium flex justify-between" >
                <span>Total</span>
                <span className="text-[#B88E2F] text-[1rem] font-bold"
                  >Rs. {subTotal()}.00</span>
              </li>
            </ul>
            <button
              type="submit"
              className="border-2 border-gray-600 py-3 px-10 rounded-3xl"
            >
              Check Out
            </button>
          </div>
        </div>
        <Facilities />
    </>
  )
}

export default Cart
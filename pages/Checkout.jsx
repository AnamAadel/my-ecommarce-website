import Facilities from "@/components/Facilities"
import HeroBanner from "@/components/HeroBanner"
import InputBox from "@/components/InputBox"
import SelectInput from "@/components/SelectInput"
import { useStateContext } from "@/context/useStateContext"

function Checkout() {
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
        <HeroBanner pageName="Checkout" />
        <div
        className="flex flex-wrap md:flex-nowrap w-[90%] m-auto gap-4 py-[4.12rem]"
      >
            <div className="flex flex-col w-full md:w-1/2 p-[2.9rem] space-y-[2.25rem]">
            <h3 className="text-[2.25rem] font-semibold">Billing details</h3>

            <form action="" className="flex flex-col gap-[1.25rem]">
                <div className="flex gap-4">
                <InputBox title="First Name" width="w-1/2" />
                <InputBox title="Last Name" width="w-1/2" />
                </div>
                
                <InputBox title="Company Name (Optional)" />
                
                {/* <label className="flex flex-col gap-4">
                <span className="text-[1rem] font-medium"
                    >Company Name (Optional)</span
                >
                <select
                    type="text"
                    className="border-2 rounded-md py-3 px-2 mb-3 text-gray-400"
                >
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Japan">Japan</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Sri Lanka" selected>Sri Lanka</option>
                </select>
                </label> */}

                <SelectInput title="Country Name" 
                optionVal={[
                    "Bangladesh",
                    "India",
                    "Pakistan",
                    "Japan",
                    "Indonesia",
                    "Malaysia",
                    "Thailand",
                    "Sri Lanka",
                ]}
                />

                <InputBox title="Street address" />
                <InputBox title="Town / City" />
                <InputBox title="Province" />
                <InputBox title="ZIP code" />
                <InputBox title="Phone" />
                <InputBox title="Email address" type="email" />
                <InputBox placeholderVal="Additional information" />
                
            </form>
            </div>
            
            <div className="flex flex-col w-full md:w-1/2 p-[2.9rem] space-y-[2.25rem]">
                <ul className="w-full space-y-5 border-b-2 pb-5">
                    <li className="text-[1.5rem] font-medium flex justify-between">
                    <span>Product</span> <span>Subtotal</span>
                    </li>
                    <li className="text-[1rem] font-medium text-gray-400" >
                        <ul className="space-y-2">
                            {cartItems.map((item)=>(
                                <li className="flex justify-between" key={item.id} >
                                    <div>{item.name} <span className="text-black">x {item.quentity}</span></div>
                                    <span className="text-black">Rs. {item.price * item.quentity}.00</span>
                                </li>
                            ))}
                        </ul>
                    
                    </li>
                    <li className="font-medium flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-black">Rs. {subTotal()}.00</span>
                    </li>
                    <li className="font-medium flex justify-between">
                    <span>Total</span>
                    <span className="text-[#B88E2F] text-[1.5rem] font-bold"
                        >Rs. {subTotal()}.00</span>
                    </li>
                </ul>
                <div className="flex items-center gap-3">
                    <input type="checkbox" className="check hidden" />
                    <span
                    className="w-[0.875rem] h-[0.875rem] rounded-[50%] border-2 border-black"
                    ></span>
                    <p>Direct Bank Transfer</p>
                </div>

            <p className="text-gray-400">
                Make your payment directly into our bank account. Please use your
                Order ID as the payment reference. Your order will not be shipped
                until the funds have cleared in our account.
            </p>
            <div className="flex items-center gap-3 text-gray-400">
                <input type="checkbox" className="check hidden" />
                <span
                className="w-[0.875rem] h-[0.875rem] rounded-[50%] border-2 border-gray-400"
                ></span>
                <p>Direct Bank Transfer</p>
            </div>

            <div className="flex items-center gap-3 text-gray-400">
                <input type="checkbox" className="check hidden" />
                <span
                className="w-[0.875rem] h-[0.875rem] rounded-[50%] border-2 border-gray-400"
                ></span>
                <p>Cash On Delivery</p>
            </div>

            <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and for
                other purposes described in our <b> privacy policy</b>.
            </p>

            <button
                type="button"
                className="border-2 border-gray-600 py-6 text-[1.25rem] px-24 rounded-3xl m-auto"
            >
                Place order
            </button>
            </div>
        </div>
        <Facilities />
    </>
  )
}

export default Checkout
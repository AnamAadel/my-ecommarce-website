import AditionalInfo from "@/components/AditionalInfo"
import ReletedProduct from "@/components/ReletedProduct"
import { useStateContext } from "@/context/useStateContext"
import { client } from "@/lib/client"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus, AiOutlineRight } from "react-icons/ai"


function SingleShop({singleProduct, reletedProduct, slug}) {
    

    const {products} = client;
    const router = useRouter();
    // const singleProduct = products.find((product)=> product.id == router.query.slug)
    // const reletedProduct = products.filter((item,index)=>{ return item.catagory.find((name)=> name) ==  singleProduct.catagory.find((name)=> name)})
    const [showSemple, setShowSemple] = useState(0);
    const [qty, setQty] = useState(singleProduct.quentity);
    const {addToCart, setTotalQty, totalQty, handleTotalPrice} = useStateContext();

     // set increament & decreament


     const incrementAndDecrement = (val)=>{
        if(val == "increament"){
            setQty(qty + 1)
        }
        if(val == "decreament"){
            qty > 1 && setQty(qty - 1)
        }
    }

    // const gallaryImg = singleProduct.image.map((img, i)=> singleProduct.image[i+1])
    
  return (
    <>
            <div className="flex w-[90%] m-auto gap-4 items-center mt-[7rem] mb-[4rem]">
                    <div className="flex items-center gap-4 border-r-2 border-gray-500 pr-4 text-[#9F9F9F]">
                    <Link href="/">Home</Link><span><AiOutlineRight /></span> <Link href="/shop">Shop</Link><span><AiOutlineRight /></span>
                    </div>
                    <span className="font-medium">Asgaard sofa</span>
            </div>
                {/* product details */}
            <div
                className="flex w-[90%] m-auto gap-4 items-start flex-wrap md:flex-nowrap pb-8"
            >
                
                <div className="flex gap-4 w-full md:w-1/2 flex-col md:flex-row">
                
                <div
                    className="flex flex-row md:flex-col order-2 md:order-1 w-full md:w-[5.2rem] gap-6"
                >
                    {singleProduct?.image.map((img,index)=>(
                        <div className="w-full h-[3.5rem] bg-[#FFF9E5] rounded-md p-2 cursor-pointer group" onClick={()=> setShowSemple(index)}>
                        <img
                            src={img}
                            alt="Outdoor bar table and stool"
                            className="w-full h-full object-contain transition-all group-hover:scale-125"
                        />
                        </div>

                    ))}
                </div>
                
                <div
                    className="flex justify-center items-center w-full h-[30rem] bg-[#FFF9E5] p-3 order-1 md:order-2 group"
                >
                    <img src={singleProduct?.image[showSemple]} alt="" className="w-full h-full object-contain transition-all group-hover:scale-110" />
                </div>
                </div>
                
                <div
                className="flex flex-col gap-5 w-full md:w-1/2 text-center md:text-start"
                >
                <h3 className="text-[2.625rem]">{singleProduct?.name}</h3>
                <h4 className="text-[1.5rem]">Rs. {singleProduct?.price}</h4>
                <div className="flex items-center gap-6 justify-center md:justify-start">
                    <div
                    className="flex border-r-2 border-gray-500 text-yellow-500 pr-4 py-2"
                    >
                    <span className="material-symbols-outlined">grade</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star_half</span>
                    </div>
                    <p className="text-[0.8125rem] text-[#9F9F9F]">5 Customer Review</p>
                </div>
                <p className="text-[0.8125rem;]">
                    Setting the bar as one of the loudest speakers in its className, the
                    Kilburn is a compact, stout-hearted hero with a well-balanced audio
                    which boasts a clear midrange and extended highs for a sound.
                </p>
                
                <div className="space-y-4">
                    <p className="text-[#9F9F9F]">Size</p>
                    <div className="flex gap-4 justify-center md:justify-start">
                    <div className="py-2 px-4 rounded-md bg-sweet-yellow">L</div>
                    <div className="py-2 px-4 rounded-md bg-light-pink">XL</div>
                    <div className="py-2 px-4 rounded-md bg-light-pink">XS</div>
                    </div>
                </div>
                
                <div className="space-y-4">
                    <p className="text-[#9F9F9F]">Colors</p>
                    <div className="flex gap-4 justify-center md:justify-start">
                    <div
                        className="w-[1.875rem] h-[1.875rem] rounded-[50%] bg-[#816DFA]"
                    ></div>
                    <div
                        className="w-[1.875rem] h-[1.875rem] rounded-[50%] bg-[#000000]"
                    ></div>
                    <div
                        className="w-[1.875rem] h-[1.875rem] rounded-[50%] bg-[#CDBA7B]"
                    ></div>
                    </div>
                </div>

                
                <div
                    className="flex gap-6 flex-wrap md:flex-nowrap justify-center md:justify-start" >
                    <div
                    className="flex gap-6 items-center border-2 rounded-lg border-gray-500 p-4 self-start"
                    >
                    <AiOutlineMinus className="font-medium text-[1.5rem] cursor-pointer" onClick={()=> incrementAndDecrement("decreament")} />
                    <span className="py-2 px-4 select-none">{qty}</span>
                    <AiOutlinePlus className="font-medium text-[1.5rem] cursor-pointer" onClick={()=> incrementAndDecrement("increament")} />
                    </div>
                    <div
                    className="flex gap-6 items-center border-2 rounded-lg border-gray-500 py-5 px-4 self-start hover:bg-sweet-yellow"
                    >
                    <span className="cursor-pointer font-medium text-[1.35rem] select-none capitalize"
                       onClick={()=> addToCart(singleProduct,qty)} >Add to card</span>
                    </div>
                </div>
                
                <ul className="space-y-3 text-gray-500 border-t-2 border-gray-500 pt-10">
                    <li>SKU : SS001</li>
                    <li>Category : Sofas</li>
                    <li>Tags : Sofa, Chair, Home, Shop</li>
                    <li>
                    Share : <a href="#">f</a> <a href="#">L</a> <a href="#">I</a>
                    </li>
                </ul>
                
                </div>
            </div>

            {/* aditional information */}
            <AditionalInfo />

            {/* related items  */}
            <ReletedProduct reletedProduct={reletedProduct} />
    </>
  )
}

export default SingleShop

export const getStaticPaths = ()=>{
    // const router = useRouter();
    const {products} = client;
    const paths = products.map((product)=> {
        return {
            params: {slug: product.id}
        }
    })
    
    return {
        // paths: [{params: {slug: "banner"}}],
        paths,
        fallback: 'blocking'
    }
}
export const getStaticProps = (context)=>{
    const {products} = client;
    const {slug} = context.params;
    const singleProduct = products.find((product)=> product.id == slug)
    const reletedProduct = products.filter((item,index)=>{ return item.catagory.find((name)=> name) ==  singleProduct.catagory.find((name)=> name)})

    // const reletedProduct = products;

    

    return {
        props: {singleProduct, reletedProduct, slug}
    }
}
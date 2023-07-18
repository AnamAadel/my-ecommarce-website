import useAuth from "@/hook/useAuth";
import { products } from "@/pages/api/client";
import Image from "next/image";
import Link from "next/link";

function TopPickProducts() {

  const {curUser} = useAuth();

  const topPickItems = products.filter((item)=> item.topPick)
  
  return (
    <>
        <div className="flex flex-col items-center py-[4rem]">
        <header className="text-center m-auto w-[90%]">
          <h2 className="text-[2.25rem] font-medium w-full">Top Picks For You</h2>
          <p className="text-[1rem] font-medium mt-[0.61rem]">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        </header>
        <div className="flex flex-wrap w-[90%] justify-start items-center">
          {topPickItems.map((product)=>(
              <Link href={`/${curUser? product.id : "MyAcount"}`}
                className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center md:items-start"
                key={product.id} >
                <Image src={product.image[0]} alt="image" width={255} height={255} className="w-full h-[17.9375rem] object-contain" />
                <p className="text-[1rem] font-light">{product.name}</p>
                <p type="button" className="text-[1.5rem] font-medium mt-[1rem]">
                  Rs. {product.price}
                </p>
              </Link>

          ))}
        </div>
        <Link
          href="/shop"
          className="text-[1.5rem] font-medium underline underline-offset-[1rem] mt-[4.31rem]"
        >
          View More
        </Link>
      </div>
    </>
  )
}

export default TopPickProducts
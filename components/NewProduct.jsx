import useAuth from "@/hook/useAuth";
import { products } from "@/pages/api/client";
import Image from "next/image";
import Link from "next/link";

function NewProduct() {
  const {curUser} = useAuth();
  // const {products} = client;

  const newItems = products.filter((item)=> item.new);
  return (
    <>
        <div className="flex justify-center bg-light-pink py-[4rem]">
        <div
          className="flex flex-col md:flex-row w-[90%] justify-between items-center"
        >
        {products && newItems.map((product, index)=> (

          <div className="w-full md:w-1/2 text-center md:text-start" key={product.id}>
            <Image src={product.image[0]} alt="image" width={455} height={500} className="-ml-[5rem] w-full h-auto" />
            <h2 className="text-[2.25rem] font-medium -mt-[5rem]">{product.name}</h2>
            <Link href={`/${curUser? product.id : "MyAcount"}`}
              
              type="button"
              className="text-[1.5rem] font-medium underline underline-offset-[1rem] mt-[1.44rem]"
            >
              View More
            </Link>
          </div>
        ))}
        </div>
      </div>
    </>
  )
}

export default NewProduct
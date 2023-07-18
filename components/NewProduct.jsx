import useAuth from "@/hook/useAuth";
import { client } from "@/lib/client";
import Link from "next/link";

function NewProduct() {
  const {products} = client;
  const {curUser} = useAuth();

  const newItems = products.filter((item)=> item.new);
  return (
    <>
        <div className="flex justify-center bg-light-pink py-[4rem]">
        <div
          className="flex flex-col md:flex-row w-[90%] justify-between items-center"
        >
        {newItems.map((product)=> (

          <div className="w-full md:w-1/2 text-center md:text-start">
            <img
              src={`${product.image[0]}`}
              alt="square-side-table"
              className="-ml-[5rem]"
            />
            <h2 className="text-[2.25rem] font-medium -mt-[5rem]">{product.name}</h2>
            <Link href={`/${curUser? product.id : "MyAcount"}`}
              type="button"
              className="text-[1.5rem] font-medium underline underline-offset-[1rem] mt-[1.44rem]"
            >
              View More
            </Link>
          </div>
        ))}

          {/* <div className="w-full md:w-1/2 text-center md:text-start">
            <img
              src="./assets/Cloud sofa three seater + ottoman_3 1.png"
              alt="square-side-table"
              className="-ml-[5rem]"
            />
            <h2 className="text-[2.25rem] font-medium -mt-[5rem]"></h2>
            <button
              type="button"
              className="text-[1.5rem] font-medium underline underline-offset-[1rem] mt-[1.44rem]"
            >
              View More
            </button>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default NewProduct
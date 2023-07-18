import Link from "next/link"

function ReletedProduct({reletedProduct}) {
  return (
    <div className="flex flex-col items-center py-[4rem]">
        <h2 className="text-[2.25rem] font-medium w-full text-center">
          Related Products
        </h2>
        <div className="flex flex-wrap w-[90%] items-center">
          {reletedProduct.map((item)=>(
            <Link href={`/${item.id}`} key={item.id}
              className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center md:items-start"
            >
              <img
                src={item.image[0]}
                alt="square-side-table"
              />
              <p className="text-[1rem] font-light">{item.name}</p>
              <p type="button" className="text-[1.5rem] font-medium mt-[1rem]">
                Rs. {item.price}.00
              </p>
            </Link>

          ))}
          
        </div>
        <button
          type="button"
          className="text-[1.5rem] font-medium underline underline-offset-[1rem] mt-[4.31rem]"
        >
          View More
        </button>
      </div>
  )
}

export default ReletedProduct
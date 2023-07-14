import Link from "next/link"
import { AiOutlineRight } from "react-icons/ai"
function HeroBanner({pageName}) {
  return (
    <div
        className="flex flex-col items-center justify-center h-[28.125rem] py-[4rem] relative z-[1] mt-[6rem]"
      >
        <img src="./assets/Meubel House_Logos-05.png" alt="" />
        <h2 className="text-[3rem] font-medium">{pageName}</h2>
        <div className="flex items-center gap-4 font-medium">
          <Link href="/">Home </Link> <span> <AiOutlineRight /></span>
          <span className="font-light text-[]"> {pageName}</span>
        </div>
        <img
          src="./assets/Rectangle 1.png"
          alt=""
          className="absolute top-0 left-0 w-full h-full z-[-1] object-cover"
        />
      </div>
  )
}

export default HeroBanner
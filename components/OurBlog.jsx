import { client } from "@/pages/api/client";
import Image from "next/image";
import Link from "next/link";

function OurBlog() {
  const {blogs} = client
  return (
    <div className="flex flex-col items-center py-[4rem]">
        <header className="text-center m-auto w-[90%]">
          <h2 className="text-[2.25rem] font-medium w-full">Top Picks For You</h2>
          <p className="text-[1rem] font-medium mt-[0.61rem]">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        </header>
        
        <div
          className="flex flex-col md:flex-row gap-[50px] md:gap-[30px] w-[90%] justify-between items-center mt-[4.6rem]"
        >
        {blogs.map((blog,index)=>(
          <Link href='/blog' key={index} className="w-full md:w-1/4 flex flex-col items-center">
            <Image src={blog.image[0]} alt="image" width={255} height={255} className="w-full h-[17.9375rem] object-contain" />
            <p className="text-[1.25rem] mt-[2.6rem]">
              {blog.name}
            </p>
            <button
              type="button"
              className="text-[1.5rem] font-medium underline underline-offset-[1rem] mt-[0.62rem]"
            >
              {blog.btn}
            </button>
            <p
              className="text-[1rem] font-medium mt-[1rem] flex justify-center gap-[1rem]"
            >
              <Image src="/assets/clock.svg" alt="clock" width={25} height={25} />
              <span>{blog.minute}</span>
              <Image src="/assets/uil_calender.svg" alt="calender" width={25} height={25} />
              <span>{blog.date}</span>
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

export default OurBlog
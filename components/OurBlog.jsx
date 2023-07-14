import Link from "next/link"

function OurBlog({blogs}) {
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
            <img
              src={blog.image}
              alt="square-side-table"
            />
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
              <img src="./assets/clock.svg" alt="clock" />
              <span>{blog.minute}</span>
              <img src="./assets/uil_calender.svg" alt="calender" />
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
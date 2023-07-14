
function Footer() {
  return (
    <>
        <footer>
      <div
        className="flex flex-wrap w-[90%] m-auto items-start justify-center md:justify-between pt-[5.81rem] pb-[3rem] border-b-2 gap-[3rem] sm:gap-x-[0] sm:gap-y-8 md:gap-[0]"
      >
        <p
          className="w-full sm:w-1/2 md:w-2/6 text-center md:text-start text-[1rem] text-[#9F9F9F] md:self-center"
        >
          400 University Drive Suite 200 Coral Gables, FL 33134 USA
        </p>

        <div className="flex flex-col items-center md:items-start w-full sm:w-1/2 md:w-1/6">
          <h5
            className="text-[#9F9F9F] mb-[1rem] lg:mb-[3.44rem] text-[1rem] font-medium"
          >
            Links
          </h5>
          <a href="#" className="text-[1rem] font-medium">Home</a>
          <a href="#" className="text-[1rem] font-medium">Home</a>
          <a href="#" className="text-[1rem] font-medium">Home</a>
        </div>
        <div className="flex flex-col items-center md:items-start w-full sm:w-1/2 md:w-1/6">
          <h5
            className="text-[#9F9F9F] md:w-1/3 mb-[1.44rem] text-[1rem] font-medium"
          >
            Help
          </h5>
          <a href="#" className="text-[1rem] font-medium">Payment Options</a>
          <a href="#" className="text-[1rem] font-medium">Home</a>
          <a href="#" className="text-[1rem] font-medium">Home</a>
        </div>
        <div
          className="flex flex-col items-center md:items-start lg:mb-[3.44rem] sm:w-1/2 w-full md:w-2/6"
        >
          <h5
            className="text-[#9F9F9F] mb-[1.44rem] lg:mb-[3.44rem] text-[1rem] font-medium"
          >
            Newsletter
          </h5>
          <form
            action="#"
            className="flex flex-wrap lg:flex-nowrap justify-center md:justify-start w-full gap-4"
          >
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full md:w-6/4 text-center md:text-center border-b-2 border-black p-2"
            />
            <input
              type="submit"
              value="subscribe"
              className="md:w-2/4 border-b-2 border-black p-2 font-bold uppercase"
            />
          </form>
        </div>
      </div>
      <p className="w-[90%] m-auto py-[2.37rem] text-center md:text-left">
        2022 Meubel House. All rights reverved
      </p>
    </footer>
    </>
  )
}

export default Footer
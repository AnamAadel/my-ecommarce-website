
function NewArrivals({newArrivals}) {
  return (
    <div className="flex justify-center bg-light-pink py-10">
        <div className="flex flex-wrap w-[90%] justify-between items-center">
          <div className="w-full md:w-2/3">
            <img
              src={newArrivals.image}
              alt="square-side-table"
              className="lg:-ml-[3rem]"
            />
          </div>

          <div className="w-full md:w-1/3 text-center">
            <h4 className="text-[1.5rem] font-medium">New Arrivals</h4>
            <h3 className="text-[3rem] font-bold">{newArrivals.name}</h3>
            <button
              type="button"
              className="text-[1.25rem] w-[15.9375rem] h-[4rem] border border-black mt-[2.06rem]"
            >
              {newArrivals.btn}
            </button>
          </div>
        </div>
    </div>
  )
}

export default NewArrivals
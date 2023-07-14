import Link from "next/link"

function HomeBanner({banner}) {
const {image, name, btn, id} = banner
  return (
    <>
        <div
        className="flex h-[56.25rem] pt-[7rem] md:pt-[0] justify-center bg-sweet-yellow"
      >
        <div
          className="flex-col md:flex-row flex w-[90%] justify-between items-center"
        >
          <div className="w-full md:w-1/2 text-center md:text-start">
            <h1 className="text-[4rem] font-medium">{name}</h1>
            <Link href={`/${id}`}
              type="button"
              className="text-[1.5rem] font-medium underline underline-offset-[1rem] mt-[2.9rem]"
            >
              {btn}
            </Link>
          </div>
          <img
            src={image[0]}
            className="w-full md:w-[30rem] lg:w-[40rem] lg:h-full"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default HomeBanner
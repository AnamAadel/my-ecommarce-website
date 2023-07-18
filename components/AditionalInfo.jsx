import Image from "next/image"
function AditionalInfo() {
  return (
    <div className="border-y-2">
        <div className="flex w-[90%] m-auto gap-4 items-center py-20 flex-col">
          <ul
            className="flex gap-8 items-center justify-center text-[#9F9F9F] mb-6"
          >
            <li>
              <a href="#desc" className="text-black target:block">Description</a>
            </li>
            <li><a href="#inro">Additional Information</a></li>
            <li><a href="#review">Reviews [5]</a></li>
          </ul>
          <div>
            <div id="desc" className="block">
              <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road. <br />
                <br />

                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its className, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>

              
              <div
                className="flex flex-wrap md:flex-nowrap justify-between items-stretch gap-4 mt-6"
              >
                
                <div className="w-full md:w-1/2 bg-light-pink p-4">
                  <img
                    src="/assets/Cloud sofa three seater + ottoman_1 1.png"
                    alt="square side table"
                    className="w-full h-full object-contain"
                  />

                  <Image src="./assets/Cloud sofa three seater + ottoman_1 1.png" alt="square side table" className="w-full h-full object-contain" width={400} height={400} />
                </div>
                
                <div className="w-full md:w-1/2 bg-light-pink p-4">
                  <Image src="/assets/Cloud sofa three seater + ottoman_2 1.png" alt="square side table" className="w-full h-full object-contain" width={400} height={400} />
                </div>
              </div>
            </div>
            
            <div id="info" className="hidden">
              <h5 className="font-bold text-[2rem]">additional info</h5>
              <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road. <br />
                <br />

                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its className, the Kilburn is a compact,
              </p>
            </div>
            
            <div id="review" className="hidden">
              <h5 className="font-bold text-[2rem]">Review</h5>
              <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road. <br />
                <br />

                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its className, the Kilburn is a compact,
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AditionalInfo
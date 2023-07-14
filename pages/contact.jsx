import ContactAddress from "@/components/ContactAddress"
import Facilities from "@/components/Facilities"
import HeroBanner from "@/components/HeroBanner"
import InputBox from "@/components/InputBox"

function contact() {
  return (
    <>
        <HeroBanner pageName="Contact" />
        {/* get in Touch */}
        <div class="text-center w-[90%] m-auto gap-12 py-[6.12rem]">
          <h3 class="text-[2.25rem] font-semibold">Get In Touch With Us</h3>
          <p class="w-[80%] m-auto text-gray-400">
            For More Information About Our Product & Services. Please Feel Free To
            Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
            Hesitate!
          </p>
        </div>
        {/* login and resister start */}
        <div
        class="flex flex-wrap md:flex-nowrap w-[90%] m-auto gap-12 py-[4.12rem]"
      >
        <div class="flex flex-col w-full md:w-1/2 p-[2.9rem] space-y-[2.25rem]">

          <ContactAddress title="Address" imgName="location.svg">
            <p>236 5th SE Avenue, New York NY10000, United States</p>
          </ContactAddress>

          <ContactAddress title="Phone" imgName="bxs_phone.svg">
              <p>
                Mobile: +(84) 546-6789
                <br />
                Hotline: +(84) 456-6789
              </p>
          </ContactAddress>
          
          <ContactAddress title="Working Time" imgName="bi_clock-fill.svg">
          <p>Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00</p>
          </ContactAddress>
        </div>
        
        <div class="flex flex-col w-full md:w-1/2 p-[2.9rem] space-y-[2.25rem]">
          <form action="" class="flex flex-col gap-[1.25rem]">
            
            <InputBox title="Your name" placeholderVal="Abc" />

            <InputBox title="Email address" placeholderVal="Abc@def.com" type="email" />
            <InputBox title="Subject" placeholderVal="This is an optional" type="email" />
            <InputBox title="Message" placeholderVal="Hi! i’d like to ask about" />
          
            <button
              type="submit"
              class="border-2 border-gray-600 py-3 px-10 sm:px-20 rounded-3xl self-start"
            >
              Sbumit
            </button>
          </form>
        </div>
      </div>
        <Facilities />
    </>
  )
}

export default contact
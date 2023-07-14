import Facilities from "@/components/Facilities"
import HeroBanner from "@/components/HeroBanner"
import Products from "@/components/Products"

function Shop() {
  return (
    <>
        <HeroBanner pageName="Shop" />
        <Products />
        <Facilities />
    </>
  )
}

export default Shop
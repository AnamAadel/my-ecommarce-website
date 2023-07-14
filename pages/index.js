import HomeBanner from "@/components/HomeBanner";
import NewArrivals from "@/components/NewArrivals";
import NewProduct from "@/components/NewProduct";
import OurBlog from "@/components/OurBlog";
import TopPickProducts from "@/components/TopPickProducts";
import { client } from "@/lib/client";




export default function Home() {
  const {banner, products, newArrivals, blogs} = client;
  const bannerItem = products.find((item)=> item.id === "banner");
  return (
    <>  
          <HomeBanner banner={bannerItem} />
          <NewProduct />
          <TopPickProducts products={products} />
          <NewArrivals newArrivals={newArrivals} />
          <OurBlog blogs={blogs} />
    </>
  )
}




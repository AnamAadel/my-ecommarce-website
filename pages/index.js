import HomeBanner from "@/components/HomeBanner";
import NewArrivals from "@/components/NewArrivals";
import NewProduct from "@/components/NewProduct";
import OurBlog from "@/components/OurBlog";
import TopPickProducts from "@/components/TopPickProducts";
import useAuth from "@/hook/useAuth";
import { client, products } from "@/pages/api/client";
import { useState } from 'react';


export default function Home() {

  const {banner, newArrivals, blogs} = client;
  const {currentUser} = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const bannerItem = products.find((item)=> item.id === "banner");


  // const newProduct = productData.filter((item, i , arr)=> arr.indexOf(item) == i)

  return (
    <>  
          <HomeBanner />
          <NewProduct />
          <TopPickProducts />
          <NewArrivals />
          <OurBlog />
    </>
  )
}


// export const getServerSideProps = async ()=>{
//   const db = getDatabase(app);
//   const productRef = ref(db, "products");
//   const bannerRef = ref(db, "banner");
//   const newArrivalsRef = ref(db, "newArrivals");
//   const blogsRef = ref(db, "blogs");

//   const productQuery = query(productRef, orderByKey());
//   const bannerQuery = query(bannerRef, orderByKey());
//   const newArrivalsQuery = query(newArrivalsRef, orderByKey());
//   const blogsQuery = query(blogsRef, orderByKey());

          
          
//   try {
    
//     setError(false);
//     setLoading(true);
//     const productSnapshot = await get(productQuery);
//     const bannerSnapshot = await get(bannerQuery);
//     const newArrivalsSnapshot = await get(newArrivalsQuery);
//     const blogsSnapshot = await get(blogsQuery);

    
//     setLoading(false)
      
//   } catch (error) {
//     console.log(error)
//   }
//     const productss = productSnapshot.val();
//     const banners = bannerSnapshot.val();
//     const newArrivalss = newArrivalsSnapshot.val();
//     const blogss = blogsSnapshot.val();

//   return{
//       props: {productss, banners, newArrivalss, blogss }
//   }
// }



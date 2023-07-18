import app from "@/firebase";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useState } from 'react';

function useProducts(props) {
    // const { productss, banners, newArrivalss, blogss} = props

    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    // const [productss, setProducts] = useState([]);
    // const [banners, setBanner] = useState([]);
    // const [newArrivalss, setNewArrivals] = useState([]);
    // const [blogss, setBlogs] = useState([]);

    // useEffect(()=>{
    //     async function fetchProducts(){
    //         const db = getDatabase(app);
    //         const productRef = ref(db, "products");
    //         const bannerRef = ref(db, "banner");
    //         const newArrivalsRef = ref(db, "newArrivals");
    //         const blogsRef = ref(db, "blogs");

    //         const productQuery = query(productRef, orderByKey());
    //         const bannerQuery = query(bannerRef, orderByKey());
    //         const newArrivalsQuery = query(newArrivalsRef, orderByKey());
    //         const blogsQuery = query(blogsRef, orderByKey());

            
    //         try {
    //             setError(false);
    //             setLoading(true);
    //             const productSnapshot = await get(productQuery);
    //             const bannerSnapshot = await get(bannerQuery);
    //             const newArrivalsSnapshot = await get(newArrivalsQuery);
    //             const blogsSnapshot = await get(blogsQuery);

    //             setLoading(false)

    //             if(productSnapshot.exists()){
    //                 setProducts([...Object.values(productSnapshot.val())])
    //             }
    //             if(bannerSnapshot.exists()){
    //                 setBanner([...Object.values(bannerSnapshot.val())])
    //             }
    //             if(newArrivalsSnapshot.exists()){
    //                 setNewArrivals([...Object.values(newArrivalsSnapshot.val())])
    //             }
    //             if(blogsSnapshot.exists()){
    //                 setBlogs([...Object.values(blogsSnapshot.val())])
    //             }
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }

    //     fetchProducts();
    // },[])
  return {
    loading,
    error,
    // productss,
    // banners,
    // newArrivalss,
    // blogss
  }
}

export default useProducts


// export const getServerSideProps = async()=>{
//     const db = getDatabase(app);
//             const productRef = ref(db, "products");
//             const bannerRef = ref(db, "banner");
//             const newArrivalsRef = ref(db, "newArrivals");
//             const blogsRef = ref(db, "blogs");

//             const productQuery = query(productRef, orderByKey());
//             const bannerQuery = query(bannerRef, orderByKey());
//             const newArrivalsQuery = query(newArrivalsRef, orderByKey());
//             const blogsQuery = query(blogsRef, orderByKey());

            
//             setError(false);
//             setLoading(true);
//             const productss = await get(productQuery);
//             const banners = await get(bannerQuery);
//             const newArrivalss = await get(newArrivalsQuery);
//             const blogss = await get(blogsQuery);

//             setLoading(false)
//             // try {

//             //     // if(productSnapshot.exists()){
//             //     //     setProducts([...Object.values(productSnapshot.val())])
//             //     // }
//             //     // if(bannerSnapshot.exists()){
//             //     //     setBanner([...Object.values(bannerSnapshot.val())])
//             //     // }
//             //     // if(newArrivalsSnapshot.exists()){
//             //     //     setNewArrivals([...Object.values(newArrivalsSnapshot.val())])
//             //     // }
//             //     // if(blogsSnapshot.exists()){
//             //     //     setBlogs([...Object.values(blogsSnapshot.val())])
//             //     // }

                
//             // } catch (error) {
//             //     console.log(error)
//             // }

//             return{
//                 props: {
//                     productss,
//                     banners,
//                     newArrivalss,
//                     blogss
//                   }
//             }
// }
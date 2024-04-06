"use client"
import CardProductComponent from "@/component/card/CardProducts";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { ENDPOINT } from "@/lib/constant";

export default function Home() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  // create a method for fetchin data
  const fetchData = async () => {
    try {
      const res = await fetch(ENDPOINT)
      const jsonData = await res.json()
      setData(jsonData.results)
      setLoading(false)

      // console log each data
      // jsonData.forEach((item: any) => {
      //   console.log(item);
      // });

    } catch (error) {
      console.error("Fetching data error.", error)
    }
  }

  useEffect (()=>{
    fetchData()
  }, []);


  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center mx-auto px-4 pb-12">
        {/* Left Column - Image */}
        <div className="flex justify-center">
          <img
            src="https://i.pinimg.com/564x/eb/cb/d1/ebcbd104a0494a1529672232fe48c2f1.jpg" // Replace with your image path
            alt="Home Image"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
        {/* Right Column - Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">Welcome to <span className="special-logo text-6xl">The.K.Shopper</span></h1>
          <p className="text-lg mb-4 text-gray-800">
          Explore a world of endless possibilities with our innovative platform. Discover curated content, connect with like-minded individuals, and unlock new experiences. Join our community today and embark on a journey of growth, learning, and inspiration.
          </p>
        </div>
      </div>

      <h1 className="text-6xl flex justify-center py-12 font-semibold text-gray-800">
        Products
      </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center m-8">
      {loading ? (
        <Loading/>
      ) : (
        data.map((item: any, index) => (
          <div key={index} className="flex justify-center">
            <CardProductComponent
              onClick={() => router.push(`/${item.id}`)}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </div>
        ))
      )}
    </div>
    </div>
  );
  
}

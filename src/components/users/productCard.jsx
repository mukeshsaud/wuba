import { useEffect, useState } from "react";

export function ProductCard() 
    {
        const [products,setProducts]=useState([])
     useEffect(()=>{
        async function fetchProduct()
                {
                    const res=await fetch("http://localhost:4000/api/product",{
                        method:"get",
                        credentials:"include",
                    });
                    const data=await res.json();
                    setProducts(data.search)
                   

                }
            fetchProduct();
    },[])
   
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 md:6 lg:8">
        <div className=" max-w-7xl mx-auto  ">
            <h1 className="font-bold text-4xl text-gray-800 text-center mb-10">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
           {/* //one item */}
           {products.map(product=>

            <div className=" group relative rounded-xl bg-white h-100 overflow-hidden">
                <div className=" relative overflow-hidden flex justify-center ">
                <img src={product.imgsUrl[0]} alt="" 
                className="w-fit h-60 object-fit overflow-hidden group-hover:scale-120 transition-transform duration-700"
                />
               
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-5 z-20" >
                     <button className="bg-indigo-700 text-white  rounded-2xl font-medium p-3 px-20 translate-y-20 group-hover:translate-y-0 duration-500 transition-translate ">Add to Cart</button>
                
                </div>
                </div>
                <div className="p-5 absolute flex flex-col justify-between h-40 w-full">
                   
                 <div className="flex justify-between  gap-3">
                    <div>
                        <h1 className=" text-lg font-bold text-gray-800">{product.name} </h1>
                        <p className="text-gray-500">{product.shortdescription}</p>
                    </div>
                    <div >
                        <p className="text-indigo-600"><span>Rs.</span>{product.price}</p>
                        <p className="text-gray-400 line-through text-xs text-end"><span>Rs.</span>{Number(product.price)+(Number(product.price)/2)}</p>
                     </div>
                 </div> 
                        <div className="text-amber-600 font-medium flex justify-center">
                            <p>Remaining Stock: <span>{product.stock} <span>items</span></span></p>
                        </div>
                </div>
    
            </div>
              )}

         </div>
        </div>
    </div>
  );
}

import { Children, useEffect, useState } from "react"
import category from "../../../backend/models/addCategory";

function CategoryList()

  {
    const [Display,setDisplay]=useState("hidden")
    const [HoverIndex,setHoverIndex]=useState(null);
    const [categories,setCategories]=useState([]);

    useEffect( ()=>{

    async function categoryFetch() 
      {
            const res= await fetch("http://localhost:4000/api/category",
                {   method:"get",
                    credentials:"include",
                    headers:{"content-type":"application/json"}
                }
                                )
            const data=await res.json();
            console.log(data.result);
            setCategories(data.result);
      } 
      categoryFetch();
    },[])
    

  
  return(
    <div class="container mx-auto p-10 h-full">

                    <form action=""  class="w-full px-6 py-8 md:p-8 h-fit" >
                 <h2 for="hr-select" className="text-blue-600"  onMouseEnter={(e)=>setDisplay("")}>categories </h2> <br />
                  <div className="flex gap-5 "   onMouseLeave={(e)=>setDisplay("hidden")} >
                <div  className={`${Display} relative w-max
                shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3),0_-2px_6px_0px_rgba(10,37,64,0.35)_inset]
                `}  >
                    {categories.map((category,index)=>(
                            <div key={index} className="flex " onMouseEnter={()=>{setHoverIndex(index);}} onMouseLeave={()=>setHoverIndex(null)}>
                        <div className="h-7 min-w-full pl-3 pr-1  hover:bg-gray-200 hover:text-orange-600"  > 
                        <ul className="flex justify-between gap-5">
                        <li> {category.parent} </li>
                        <li>{HoverIndex === index? ">" : ""}</li>
                            </ul></div>

                            <div className={`  absolute left-full   w-full top-0 p-2  h-auto py-2 bg-white ${HoverIndex === index? "block" : "hidden"}
                             shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3),0_-2px_6px_0px_rgba(10,37,64,0.35)_inset]
                             
                             `}  >
                                <ul>
                                    { category.childrens.map((Children,i)=>(

                                            <li key={i} className="hover:bg-gray-300 hover:text-orange-600">{Children.name}</li>

                                                    ))}
                                </ul>
                            </div>
                         </div>
                             ))}
                          </div> </div>
                 
                 </form>


            </div>
        
     )}

     export {CategoryList}
import { useEffect, useState } from "react"

export default function AddCategory(){
            const [mainCategory,setMainCategory]=useState('');
            const [subCategory,setSubCategory]=useState('');
            const [mainCategorySelect,setmainCategorySelect]=useState('');
            const [mainCategoryDisplay,setMainCategoryDisplay]=useState('');
               const [subCategorySelect,setsubCategorySelect]=useState('');
                     const [subCategoryDisplay,setSubCategoryDisplay]=useState('');
            
        const handleSubmit=async(e)=>{
            e.preventDefault();
            console.log("fa")
              const res= await fetch("http://localhost:4000/api/admin/addcategory",{
                method:"post",
                credentials:"include",
                body:JSON.stringify({mainCategory,subCategory}),
                headers: { "Content-Type": "application/json" },
              })
              const data= await res.json()
              console.log(data);
        }
        //for main category select
        useEffect(()=>{
            if(!mainCategorySelect){
             setMainCategoryDisplay("");
            }
            if(mainCategorySelect){
             setMainCategoryDisplay("hidden");
            }
        },[mainCategorySelect,mainCategoryDisplay])



    return(
    <div class="container mx-auto p4-10">
    <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl">
        <div class="md:flex">
            <div class="w-full px-6 py-8 md:p-8">
                <h2 class="text-2xl font-bold text-gray-800">add category</h2>
                
                <form class="mt-6" onSubmit={handleSubmit}>
                    <div class="mb-6">
                        <label class="block text-gray-800 font-bold mb-2" >
                            main category
                        </label>
                        <select value={mainCategorySelect} onChange={(e)=>setmainCategorySelect(e.target.value)} >
                            <option value='' >add category</option>
                              <option value='op1'>op1</option>
                                <option value='op2'>op2</option>
                        </select>
                        <input  className={`${mainCategoryDisplay} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline` }
                                 type="text" placeholder="add main category" value={mainCategory} onChange={(e)=>setMainCategory(e.target.value)}/>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-800 font-bold mb-2" >
                            sub category
                        </label>
                        <input class={` shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline` }
                            type="text" placeholder="add sub category" value={subCategory} onChange={(e)=>setSubCategory(e.target.value)}/>
                    </div>
                    
                    
                
                    <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
)}
import { useState } from "react"

export function AddProduct(){
    const[imgsUrl,setimgsUrl]=useState([]);
    const[name,setname]=useState("");
    const[price,setprice]=useState("");
    const[stock,setstock]=useState("");
    const[specification,setspecification]=useState("");
    const[description,setdescription]=useState("");
    const[shortdescription,setShortdescription]=useState("");

    // imgsUrl:{type:String,require:true,trim:true},
    // name:{type:String,required:true,unique:true},
    // price:{type:Number,required:true},
    // stock:{type:Number,required:true},
    // specification:{type:String,required:true,minLength:10,maxLength:80},
    // description:{type:String,required:true,minLength:30,maxLength:200},

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const data= new FormData();
        // data.append("metadata",123)
        const metadata = JSON.stringify({ name,price,stock,specification,description,shortdescription });
        data.append('metadata', metadata);
        for(let i=0;i<imgsUrl.length;i++){
                 data.append("imgsUrl",imgsUrl[i]);
        }
        // data.append("imgsUrl",imgsUrl);
        console.log(imgsUrl,"s");
      
            const res=await fetch("http://localhost:4000/api/admin/addproduct",{
                method:"post",
                credentials:"include",
                body:data,
                // headers: {
                //     "Content-Type": "multipart/form-data"
                //         }
                        })
            const resdata=await res.Json();
            console.log(resdata);
    }

    const handFileSelect=(e)=>{
         const files = Array.from(e.target.files)
        setimgsUrl(files)

    }

    return(
                <div className="flex justify-center items-center min-h-screen bg-gray-200 text-white" >
            <div className=" flex">
            <form className="flex flex-col gap-2 bg-gray-800 p-5 rounded-3xl h-fit" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3 ">
                <label >images</label>
                <input type="file"  onChange={handFileSelect} multiple/>
                </div>

                 <div className="flex flex-col gap-3 ">
                <label htmlFor="">name</label>
                <input type="text" value={name} placeholder="Premium Smart Watch" onChange={(e)=>setname(e.target.value)}/>
                </div>

                <div className="flex flex-col gap-3 ">
                <label htmlFor="">price</label>
                <input type="number" value={price} onChange={(e)=>setprice(e.target.value)}/>
                </div>

                <div className="flex flex-col gap-3 ">
                <label htmlFor="">stock</label>
               <input type="number" value={stock} onChange={(e)=>setstock(e.target.value)}/>
                </div>

                 <div className="flex flex-col gap-3 ">
                <label htmlFor="">specification</label>
               <input type="text" value={specification}  onChange={(e)=>setspecification(e.target.value)}/>
                </div>
                
                 <div className="flex flex-col gap-3 ">
                <label htmlFor="">shortdescription</label>
               <input type="text" value={shortdescription} placeholder="Fitness Tracker, Heart Rate Monitor" onChange={(e)=>setShortdescription(e.target.value)}/>
                </div>

                 <div className="flex flex-col gap-3 ">
                <label htmlFor="">description</label>
               <input type="text" value={description} placeholder="long description" onChange={(e)=>setdescription(e.target.value)}/>
                </div>



                <button type="submit">submit</button>
            </form>
            
            </div>
            </div>

        )
}
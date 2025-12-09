import { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";

function Home(){
    const [user,setUser]=useState("")
    const navigate=useNavigate()
useEffect(()=>{
    let getUser=async()=>
        {
            const res= await fetch("http://localhost:4000/api/me",
                {
                    method:"get",
                    credentials:"include"
                }
            )
            console.log(res)
            const data =await res.json();
            console.log(data,"s");
            if(data.error) navigate("/login")
            setUser(data.User)
         }
         getUser();
        }
        ,[])   

return  (
            <div>

                {/* {user.fullName} */}
s
            </div>

        )
}

export default Home
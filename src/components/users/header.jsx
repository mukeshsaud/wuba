import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import { FaCartShopping } from "react-icons/fa6";
import { ProductCard } from "./productCard";


function Header({name}) {

  const [showLogin,setShowLogin]=useState(false);
  const [showSignup,setShowSignup]=useState(false);

    return(
  <div className="">
    <div className="bg-gray-700 flex text-white  justify-between h-20 lg:py-4 lg:px-2  gap-1">

      <div className="flex items-center justify-evenly w-full max-w-6xl gap-1">
          <img src="src/assets/banner.png" alt="banner loading" className="h-7  sm:h-8  md:h-[60px]  lg:h-20 w-auto" />

            <div>
              <input type="text" placeholder="" className="w-[40vw]  sm:w-[50vw] md:w-[60vw] lg:w-[70vw] h-10 text-black bg-white rounded-lg" />
              <button></button>
            </div>
      </div>
      {name ?
        (
          <div className="flex gap-2 text-xs lg:gap-5 items-center  sm:text-lg md:text-xl lg:text-2xl">
            <p className="  hover:text-amber-200 hover:cursor-pointer">Welcome {name}</p>
            <p className=" flex gap-2 items-center hover:opacity-70 hover:cursor-pointer">  <FaCartShopping  className="text-lg sm:text-xl md:text-2xl lg:text-3xl" /> Cart</p>
            <button className=" hover:opacity-70 hover:cursor-pointer">Logout</button>
          </div>) 

              :

        (
          <div class="m-4">
            <button class="mr-5 text-xl hover:opacity-70 hover:cursor-pointer"  
            onClick={()=>{if(showSignup==true) setShowSignup(false); setShowLogin(true) }}>LOGIN</button>
            <button class="mr-5  text-xl hover:opacity-70 hover:cursor-pointer " 
            onClick={()=>{if(showLogin==true) setShowLogin(false); setShowSignup(true)}}>SIGN UP</button>
          </div>
        ) 
      }
    </div>
      
          <ProductCard/>

      { showLogin &&
      (
       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Login/>
       </div>
      )
      }
     

      { showSignup &&
      (
       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Signup/>
       </div>
      )
      }

  </div>
    )
    
}
export default Header;
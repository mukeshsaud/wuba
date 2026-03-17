import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(){
    const [email,setEmail]=useState("");
     const [password,setPassword]=useState("");
        const navigate=useNavigate();
        
    const handleSubmit=async (e)=>{
            e.preventDefault();
          console.log("fs")
            const res= await fetch("/api/login",
            {
                    method:"post",
                    body:JSON.stringify({ email,password}),
                    credentials:"include",
                    headers: { "Content-Type": "application/json" },

            })
    
                    const data= await res.json();
                    if(data.token) navigate("/productcard")
                    console.log(data);
                    console.log("fss")
    }
    return (<><div class="py-10">
    <div class="flex h-full items-center justify-center">
        <div
            class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-900 flex-col flex h-full items-center justify-center sm:px-4">
            <div class="flex h-full flex-col justify-center gap-4 p-6">
                <div class="left-0 right-0 inline-block border-gray-200 px-2 py-2.5 sm:px-4">
                    <form class="flex flex-col gap-4 pb-4"  onSubmit={handleSubmit}>
                        <h1 class="mb-4 text-2xl font-bold  dark:text-white">Login</h1>
                        <div>
                            <div class="mb-2">
                                <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
                                    for="email">Email:</label>
                            </div>
                            <div class="flex w-full rounded-lg pt-1">
                                <div class="relative w-full"><input
                                        class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                                        type="email"  placeholder="email@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}
                                        required=""/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="mb-2">
                                <label class="text-sm font-medium text-gray-900 dark:text-gray-300"
                                    data-testid="flowbite-label" for="password">Password</label>
                            </div>
                            <div class="flex w-full rounded-lg pt-1">
                                <div class="relative w-full"><input
                                        class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                                      type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                                </div>
                            </div>
                            <p class="mt-2 cursor-pointer text-blue-500 hover:text-blue-600">Forgot password?</p>
                        </div>
                        <div class="flex flex-col gap-2">
                            <button type="submit"
                                class="border transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed border-transparent bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white disabled:bg-gray-300 disabled:text-gray-700 rounded-lg ">
                                <span
                                    class="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                                    Login
                                </span>
                            </button>
                            <button type="button"
                                class="transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg ">
                                <span
                                    class="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                                   
                                    Sign in with Google
                                </span>
                            </button>
                        </div>
                    </form>
                    <div class="min-w-[270px]">
                        <div class="mt-4 text-center dark:text-gray-200">New user?
                            <a class="text-blue-500 underline hover:text-blue-600" href="/signup">Create account
                                here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></>)
}

export default Login;
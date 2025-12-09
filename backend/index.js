import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import userRouter from "./routes/user.js"
import cookieParser from "cookie-parser"
import {google} from "googleapis"
import googleAuthRouter from "./routes/googleAuth.js"
import { router as productRouter} from "./routes/addProduct.js"
import {checkForAuthentication} from "./middlewares/auth.js"
import { restrictTo } from "./middlewares/auth.js"

// import { loadEnvFile } from "process"



// loadEnvFile("../.env");

const app=express();


//dbconnect
mongoose.connect("mongodb://127.0.0.1:27017/shoppy").then(()=>console.log("mongodb connected"))


export const oauth2Client = new google.auth.OAuth2(
process.env.googleAuth_Clientid,
 process.env.googleAuth_ClientSecret,
  process.env.googleAuth_redirectURL // same as in Google Cloud
);

//middleware
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());
app.use(checkForAuthentication);
app.use(express.urlencoded({extended:false}))



//routes
app.use("/api/",userRouter,productRouter);
app.use("/auth/google",googleAuthRouter);

//listen
app.listen(4000,()=>{
    console.log("server running at port 4000");
})
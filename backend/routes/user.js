import express from "express"
import {handleRegisterUser,handleLoginUser} from "../controllers/user.js"
import {handleAddCategory,handleGetCategory} from "../controllers/addCategory.js"
import { restrictTo } from "../middlewares/auth.js";


const router=express.Router();

router.post("/signup",restrictTo(["USER"]),handleRegisterUser);
router.post("/login",handleLoginUser);
router.get("/me",restrictTo(["USER"]),(req,res)=>{
    const User=req.user;
     console.log("User",User);
      return res.json({User});
})
router.get("/category",handleGetCategory)


//admin
router.post("/admin/addcategory",handleAddCategory)



export default router;
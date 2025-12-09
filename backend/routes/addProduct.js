import {handleAddProduct,handleGetProduct} from "../controllers/addProduct.js"
import multer from "multer"
import fs from "fs";
import express from "express"

export const router=express.Router()

const storage= multer.diskStorage({
    destination:function (req,file,cb){
        // const folderCreateTime=Date.now();
        //      fs.mkdir(`../../public/productimages/${folderCreateTime}`,(err) => {
        //        if (err) {
        //            return console.error(err);
        //        };
        //     })
            cb(null,`../public/productimages`)
       
    },
    filename:function(req,file,cb){
        cb(null,`${Date.now()}_${file.originalname}`)
    }
})

const upload=multer({storage})

router.get("/product",handleGetProduct)

//admin
router.post("/admin/addproduct",upload.any(),handleAddProduct);
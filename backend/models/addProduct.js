import {Schema,model} from "mongoose"

const productSchema= new Schema({

    imgsUrl:[{type:String,required:true}],
    name:{type:String,required:true,unique:true,maxLength:25},
    price:{type:Number,required:true},
    stock:{type:Number,required:true},
    specification:{type:String,required:true,},
    description:{type:String,required:true},
    shortdescription:{type:String,required:true,maxLength:50,minLength:5}
   
})

export const product= model("product",productSchema);


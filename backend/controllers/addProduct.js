import { product } from "../models/addProduct.js";


export async function handleAddProduct(req,res){
    const file=req.files;
    const arrayfile=[];
    const bodyString=req.body.metadata;
    const body=JSON.parse(bodyString);
    // console.log(file,req.file,"s");
        for(let i=0;i<file.length;i++){
            arrayfile.push(file[i].path)
        }
        console.log(arrayfile);
    try{
    const Product=await product.create({
         imgsUrl:arrayfile,
    name:body.name,
    price:body.price,
    stock:body.stock,
    specification:body.specification,
    description:body.description,
    shortdescription:body.shortdescription
                                        })
console.log(Product);
      return res.json({
        sucess:true,
        Product:Product
      })      
    // return res.send(body);                       
    }

    catch(err)
    {
        return res.status(400).json({addproduct:err.message})
    }
}

export async function handleGetProduct(req,res){

    try{
            const search=await product.find({});
            return res.json
            ({
                sucess:true,
                search:search
            })       

        }

    catch(err)
    {
            return res.status(400).send("product not found")

    }
    
}
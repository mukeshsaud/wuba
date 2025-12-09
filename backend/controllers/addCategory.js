import category from "../models/addCategory.js"
export async function handleAddCategory(req,res){
        const body=req.body;
try{
        const maincatexist=await category.findOne({name:body.mainCategory})
        const subcatexist= body.subCategory? await category.findOne({name:body.subCategory}): null;
      
  
        if(maincatexist && subcatexist ) { return res.status(400).json({error:" categories already exists"})}
        if(subcatexist){ return res.status(400).json({error:" sub category already exists"})}

        const mainCat= maincatexist ||
        await category.create({
            name:body.mainCategory,
            parent:null,
            tag:"MAIN"
            })

        let subCat= subcatexist;

        if(body.subCategory && !subcatexist)
            {
            subCat= await category.create({
            name:body.subCategory,
            parent:mainCat,
            tag:"SUB"
            })
            }
        return  res.status(201).json({sucess:"add cat sucess",mainCat,subCat});
    }
catch(err)
    {
            return  res.status(500).json({errorataddcat:err.message});
    }
}
export async function handleGetCategory(req,res){

        let result=[];
       const parents= await category.find({parent:null});
       for(let parent of parents)
        {
            const children=  await category.find({parent:parent._id});
            result.push({
                parent:parent.name,
                childrens:children
            })

        }


return res.json({ result });
        

}
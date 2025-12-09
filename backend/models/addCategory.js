import {Schema,model} from "mongoose"

// const categorySchema=new Schema({
//     mainCategory:{type:String,required:true},
//     subCategory:{type:String,},
//     sub_subCategory:{type:String,unique:true},
// },{timestamps:true})

const categorySchema=new Schema({
    name:{type:String,required:true,unique:true,trim:true},
    parent:{type:Schema.Types.ObjectId,ref:"category",default:null},
    tag:{type:String,enum:["MAIN","SUB"],required:true}
},{timestamps:true})


const category= model("category",categorySchema);

export default category
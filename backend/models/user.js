import {Schema,model} from "mongoose"
import bcrypt from "bcrypt";
import {setUser} from '../services/auth.js'




const userSchema=new Schema({
        fullName:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String},
        role:{type:String,enum:["USER","ADMIN"],required:true,default:"USER"},
        googleId:{type:String},
        picture:{type:String}
},{timestamps:true})

userSchema.pre("save", async function (next) {
    if(this.googleId) return next();


    const saltRounds=10;
 
 const hashpass= await bcrypt.hash(this.password,saltRounds) 
    this.password=hashpass;

// bcrypt.hash(password,saltRounds).then((hash)=>{
//     this.password=hash
//     console.log(this.password);
//         next();
// }) 

        next();
})

userSchema.static("matchPassword",async function ({email,password}) {

        const User= await this.findOne({email})
        if(!User) throw new Error("user doent exist")

        const result= await bcrypt.compare(password,User.password);
        if(!result) throw new Error("wrong password")
       const token= setUser({_id:User._id,fullName:User.fullName,email:User.email,role:User.role});

   return token;
})


const user=model("user",userSchema);

export default user;
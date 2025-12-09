import { getUser } from "../services/auth.js";

export function checkForAuthentication(req,res,next){
    console.log("checkForAuthentication")
const cookie=req.cookies.token;
    req.user=null;
 const verifiedToken=getUser(cookie);
 req.user=verifiedToken;
  next();
}

export function restrictTo(roles=[]){
    return function(req,res,next){
        if(!req.user) return  res.status(400).json({error:"no user found"});
        if(!roles.includes(req.user.role)) return res.json({status:"unauthorized"});
        next();
    }
}
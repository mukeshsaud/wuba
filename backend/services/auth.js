import jwt from "jsonwebtoken"

export function setUser({_id,fullName,email,role}){
            const token=  jwt.sign({_id,fullName,email,role},"itsasecret");
            return token;
}
export function getUser(token){
            if(!token) {return null;}
            console.log("getUser",token);
            const verifying=jwt.verify(token,"itsasecret");
            return verifying;
}
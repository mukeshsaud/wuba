import user from "../models/user.js"



export async function handleRegisterUser(req,res){
        const body=req.body;
        
        let password = req.body.password.trim(); // remove start & end spaces
        console.log(body);

//   1️⃣ Reject if internal spaces
  if (/\s/.test(password)) {
    return res.status(400).json({
      error: "Password must not contain spaces in between.",
    });
  }

  // 2️⃣ Check for strength
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      error:
        "Password must have at least 8 characters, one uppercase, one lowercase, and one number.",
    });
  }
        try {
       const User= await user.create({
             fullName:body.fullName,
        email:body.email,
        password:password,
        role:body.role
                    })
        return res.redirect("http://localhost:5173/");
    }
    catch(error){
        return res.status(400).end(error.message);
    }
}


export async function handleLoginUser(req,res){
        const body=req.body;
        try {
             let password = req.body.password.trim(); // remove start & end spaces

  // 1️⃣ Reject if internal spaces
  if (/\s/.test(password)) {
    return res.status(400).json({
      error: "Password must not contain spaces in between.",
    });
  }

  // 2️⃣ Check for strength
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      error:
        "Password must have at least 8 characters, one uppercase, one lowercase, and one number.",
    });
  }
      const token=await user.matchPassword({email:body.email,password:body.password});
        res.cookie("token",token,{
        httpOnly:true,
        sameSite: "lax",
        secure:false //change true in production
      });
        return res.json({token});
    }
    catch(error){
        return res.status(400).json({error:error.message});
    }
}


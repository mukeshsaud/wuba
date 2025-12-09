import express from "express"
import { oauth2Client } from "../index.js";
import user from "../models/user.js"
import { setUser } from "../services/auth.js"

const router=express.Router();

router.get("/",(req, res) =>
{
  const url = oauth2Client.generateAuthUrl
  ({
    scope: ["profile", "email"],
  });
    res.redirect(url);
}
);

router.post("/callback", async (req, res) => {
  const { code } = req.query;

  try {
    // 1️⃣ Exchange the code for tokens
    const { tokens } = await oauth2Client.getToken(code);

    // 2️⃣ Set credentials (so we can make authorized requests)
    oauth2Client.setCredentials(tokens);

    // 3️⃣ Get user info
    const oauth2 = google.oauth2({ version: "v2", auth: oauth2Client });
    const { data } = await oauth2.userinfo.get();


   const User= await user.create({
        fullName:data.name,
        email:data.email,
        role:"USER",
        googleId:data.id,
        picture:data.picture
    })

   const token= setUser({_id:User._id,email:User.email,role:user.role})
    console.log("User Info:", data);
        res.cookie("token",token);
    res.json({
      message: "Login success!",
      user: data,
    });
  } catch (err) {
    console.error("Error exchanging code:", err);
    res.status(500).send("Authentication failed");
  }
});




export default router;
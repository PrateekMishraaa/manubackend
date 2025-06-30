import express from "express"
const router = express.Router()
import Contact from "../models/Contact.js"



router.post("/contact",async(req,res)=>{
        const {FirstName, LastName,EmailAddress,Message} = req.body;
        if(!FirstName || !LastName || !EmailAddress || !Message){
            return res.status(403).json({messsage:"All fields are required"})
        }
        try{
                const newcontact = await Contact.create({
                    FirstName,
                    LastName,
                    EmailAddress,
                    Message
                })
                console.log("New contact form created", newcontact)
                res.status(200).json({message:"Contact form submited successfully"})
        }catch(error){
            console.log(error)
            res.status(500).json({message:"Internal server error",error})
        }
})
router.get("/allcontact",async(req,res)=>{
    try{
            const allforms = await Contact.find()
            console.log("all forms",allforms.length)
            res.status(200).json({message:"All forms fetched successfully",allforms})
    }catch(error){
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
})
export default router
import mongoose, {Schema} from "mongoose"


const ContactSchema = new Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    EmailAddress:{
        type:String,
        required:true
    },
    Message:{
        type:String,
        required:true,
       
    }
},{
    timestamps:true
})
const Contact = mongoose.model("Contact",ContactSchema)
export default Contact
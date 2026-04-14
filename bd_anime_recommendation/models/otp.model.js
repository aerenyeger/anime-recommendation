const mongoose=require("mongoose")
const otpSchema=new mongoose.Schema({
    otp:{
        type:String,
        required:true,
    },
    temp_username:{
        type:String,
        required:true,
    },
    temp_password:{
        type:String,
        required:true
    },
    temp_email:{
        type:String,
        required:true,
    },
    expiresAt:{
        type:Date,
        // must return a function instde{}
        default:()=>{ return Date.now()+5*60*1000}
    }
});
otpSchema.index({expiresAt:1},{expireAfterSeconds:0})

module.exports=mongoose.model("Otp",otpSchema)
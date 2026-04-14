const mongoose=require("mongoose")

const reviewSchema=new mongoose.Schema({
    animeId:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:10
    }
});
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    reviews:{
        type:[reviewSchema]
    }
},
{timestamps:true}
)

module.exports=mongoose.model("User",userSchema)
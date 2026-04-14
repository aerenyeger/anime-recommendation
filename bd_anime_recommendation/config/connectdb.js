const mongoose=require("mongoose")

const connectdb=async()=>{
    try {
        await mongoose.connect(process.env.MONGODBURL)
        console.log("mongodb connected successfully")
   
    } catch (error) {
         console.log("error while connecting to mongodb")
    }
}

module.exports=connectdb
const express=require("express");
require("dotenv").config()
const mongoose=require("mongoose");
const app=express();
const authRoutes=require("./routes/auth.routes")
const recommendRoutes=require("./routes/recommend.routes")
const cors=require("cors")
app.use(cors())
const connectdb=require("./config/connectdb")
app.use(express.json())

connectdb()

app.use("/api/auth",authRoutes)
app.use("/api/recommend",recommendRoutes)
app.listen(process.env.PORT,()=>{
    console.log(`server is runnning on PORT ${process.env.PORT}`)
})
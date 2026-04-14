const express=require("express")
const router=express.Router()
const{getAnimeByPage,recommendAnimes}=require("../controllers/recommendation.controller")

router.get("/getAnimeByPage",getAnimeByPage)
router.post("/recommendAnimes",recommendAnimes)
module.exports=router
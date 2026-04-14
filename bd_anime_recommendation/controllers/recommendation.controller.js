//recommend anime 
//page and return response accordingly
const animedata=require("../animedata.json")
const axios=require("axios")
const getAnimeByPage=async(req,res)=>{
   try {
     const page=parseInt(req.query.page)
    const limit=20
    const startInd=page*limit
    const endInd=(page+1)*limit
    const paginatedAnime=animedata.slice(startInd,endInd)
    return res.status(200).json({
      anime:paginatedAnime
    })
   } catch (error) {
    return res.status(500).json({message:"error in getAnimeByPAge"})
   }
}

const recommendAnimes=async(req,res)=>{
   try {
      const anime=req.body.anime;
      const response=await axios.post("http://localhost:8000/recommend",{anime}
      )
      return res.status(200).json(response.data)
   } catch (error) {
      return res.status(500).json({message:"error in recommendAnimes"})
   }
}
module.exports={getAnimeByPage,recommendAnimes}
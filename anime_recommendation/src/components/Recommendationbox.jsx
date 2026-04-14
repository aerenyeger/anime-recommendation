import React from 'react'
import { useEffect, useState } from "react"
import AnimeCard from './AnimeCard'
import axios from 'axios'

const Recommendationbox = () => {
    const [anime, setanime] = useState("")
    const [recommendedIds, setrecommendedIds] = useState([])
    const [recommendedAnimes, setrecommendedAnimes] = useState([])

    const recommendAnimes=async()=>{
        const res=await axios.post("http://localhost:3000/api/recommend/recommendAnimes",{
            anime:anime
        })
        setrecommendedAnimes(res.data.recommendations)
    }
    return (
        <div>
            <input type="text" onChange={(e) => { setanime(e.target.value) }} />
            <button onClick={()=>{recommendAnimes()}} >Recommend</button>
            {recommendedAnimes.length>0 && 
            <div>
                {recommendedAnimes.map((anime,id)=>(
                    <AnimeCard key={anime.id} anime={anime}></AnimeCard>
                ))}
            </div>}
        </div>
    )
}

export default Recommendationbox

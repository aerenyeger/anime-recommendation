import React, { useEffect,useState } from 'react'
import axios from 'axios'
import AnimeCard from './AnimeCard'
const AnimeList = ({pages}) => {
  const [animedata,setanimedata]=useState([])
    useEffect(()=>{
      const fetchdata=async()=>{
        const res=await axios.get(`http://localhost:3000/api/recommend/getAnimeByPage?page=${pages}`)
      setanimedata(res.data.anime)
      }
      fetchdata()
    },[pages])
  return (
    <div>
      {animedata.map((anime,ind)=>(
        <div key={anime.id}>
          <AnimeCard anime={anime}></AnimeCard>
    </div>
      ))}
    </div>
  )
}

export default AnimeList

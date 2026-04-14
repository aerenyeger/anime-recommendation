import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AnimeCard from "../components/AnimeCard"
import PageButton from '../components/PageButton'
import AnimeList from '../components/animeList'
import Recommendationbox from '../components/Recommendationbox'
const HomePage = () => {
  const[page,setpage]=useState(1);
  return (
    <div>
      <Recommendationbox/>
      <AnimeList pages={page}/>
      <PageButton page={page} setpage={setpage} ></PageButton>
    </div>
  )
}

export default HomePage

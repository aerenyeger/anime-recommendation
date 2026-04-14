import React from 'react'

const AnimeCard = ({anime}) => {
   let genresText = "Not available"

  if (Array.isArray(anime.genres)) {
    genresText = anime.genres.join(" | ")
  } else if (typeof anime.genres === "string") {
    genresText = anime.genres
  }
  return (
    <div>
      <h2>{anime.name}</h2>
      <p>{anime.studio}</p>
      <p><b>Genres:</b> {genresText}</p>
      <p>{anime.description}</p>
    </div>
  )
}

export default AnimeCard

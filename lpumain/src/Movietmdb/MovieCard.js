import React from 'react'
import './Main.css';
function MovieCard({title,vote_average,vote_count,id,release,poster_path,
  backdrop_path
  }) {
  return (
    <>
    <div className='card'>
    
    <img   width= '150px'  src={`https://image.tmdb.org/t/p/original/${poster_path}`}/>
    <h1>{title}</h1>
    <h1>{id}</h1>
    <h1>{vote_average}</h1>
    <h1>{vote_count}</h1>
    <h1>{release}</h1>
    </div>
    </>
  )
}

export default MovieCard
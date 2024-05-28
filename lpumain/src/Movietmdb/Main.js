import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home.js';
import Movies from './Movies.js';
import Movlib from './Movlib.js';
import Tv from './Tv.js';
import Tvlib from './Tvlib.js';
import './Main.css';
import { useState} from 'react';
import MovieCard from './MovieCard.js'
function Main() {
   const [movies,setMovies] =  useState([])

    const fetchMovies = async ()=>{
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&`);

            const result = await response.json();
            setMovies(result.results);
            console.log(movies);


        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchMovies();
    },[])
  return (
    <>
<BrowserRouter>
<NavBar/>
<Routes>
<Route  path='/' element={<Home/>}/>
<Route  path='/movies' element={<Movies/>}/>
<Route  path='/tv' element={<Tv/>}/>
<Route  path='/movlib' element={<Movlib/>}/>
<Route  path='/tvlib' element={<Tvlib/>}/>

</Routes>

</BrowserRouter>
<div className='maincard'>
{movies.map((ele,index)=>{
    return <MovieCard  key={index} {...ele}  />
})}
    </div>
    
    
    </>
  )
}

export default Main
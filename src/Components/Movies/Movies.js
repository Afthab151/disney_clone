import React from 'react'
import './Movies.css'
import { selectMovies } from '../../features/movie/movieSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Movies() {
  const movies = useSelector(selectMovies);
 


  return (
    <div className='movies_container'>
      <h4>Recommanded for You</h4>
      <div className='movies_sub'>
        {movies && movies.map((movie) => (
          <div className='movies_list' key={movie.id}>
            <Link to={`/detail/${movie.id}`}>
            <img className='movies_img' src={movie.cardImg} alt="" />
            </Link>
          </div>

        ))}

      </div>
    </div>
  )
}

export default Movies

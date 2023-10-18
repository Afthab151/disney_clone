import React, { useEffect } from 'react'
import './Home.css'
import ImgSlider from '../ImgSlider/ImgSlider'
import Viewer from '../Viewer/Viewer'
import Movies from '../Movies/Movies'
import db from '../../firebase/config'

import {useDispatch} from 'react-redux'
import { setMovies } from '../../features/movie/movieSlice'


function Home() {
  
  const dispatch = useDispatch()
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      dispatch(setMovies(tempMovies));
    });
  }, []);
  return (

    <div className='home_container'>
      
      <ImgSlider />
      <Viewer />
      <Movies />
      
    </div>


  )
}

export default Home

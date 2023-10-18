import React, { useEffect,useState } from 'react'
import './Detail.css'
import { useParams } from 'react-router-dom'
import db from '../../firebase/config';
function Detail() {
  const {id} =useParams();
  const [movie,setMovie] = useState()
  useEffect (()=>{
    db.collection('movies').doc(id).get().then((doc)=>{
      if (doc.exists){
        setMovie(doc.data())
      }else{
        alert("")
      }
    })
  },[id])
  return (
    <div className='detail_container'>
    {movie && (
      <>
      <div className='detail_sub'>
        <img className='detail_img' src={ movie.backgroundImg} alt="" />
      </div>
      <div className='image_title'>
        <img className='title_img' src={ movie.titleImg } alt="" />
      </div>
      <div className='detail_button'>
        <button className='play_button'> <img src="/Images/play-icon-black.png" alt="play_icon" /> PLAY</button>
        <button className='trailer_button'> <img src="/Images/play-icon-white.png" alt="play_icon" /> TRAILER</button>
        <button className='add_button'>+</button>
        <button className='groupwatch_button'> <img src="/Images/group-icon.png" alt="group_icon" /> </button>
      </div>
      <div className='subtitle'>
        <span>{movie.subTitle}</span>
      </div>
      <div className='description'>
        <span>{movie.description}</span>
      </div>
    </>
  )}
  </div>
  )
}

export default Detail

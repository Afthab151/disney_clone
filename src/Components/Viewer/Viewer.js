import React from 'react'
import './Viewer.css'
function Viewer() {
  return (
    <div className='viewer_container'>
      <div className='viewer_sub'>
        <img className='viewer_img' src="/Images/viewers-disney.png" alt="" />
        <video className='viewer_video' autoPlay={true} loop={true} playsInline={true} id='1'>
          <source src="/Videos/1564674844-disney.mp4" type='video/mp4' />
        </video>
      </div>
      <div className='viewer_sub'>
        <img className='viewer_img' src="/Images/viewers-pixar.png" alt="" />
        <video className='viewer_video' autoPlay={true} loop={true} playsInline={true} id='2'>
          <source src="/Videos/1564676714-pixar.mp4" type='video/mp4' />
        </video>
      </div>
      <div className='viewer_sub'>
        <img className='viewer_img' src="/Images/viewers-marvel.png" alt="" />
        <video className='viewer_video' autoPlay={true} loop={true} playsInline={true} id='3'>
          <source src="/Videos/1564676115-marvel.mp4" type='video/mp4' />
        </video>
      </div>
      <div className='viewer_sub'>
        <img className='viewer_img' src="/Images/viewers-starwars.png" alt="" />
        <video className='viewer_video' autoPlay={true} loop={true} playsInline={true} id='4'>
          <source src="/Videos/1608229455-star-wars.mp4" type='video/mp4' />
        </video>
      </div>
      <div className='viewer_sub'>
        <img className='viewer_img' src="/Images/viewers-national.png" alt="" />
        <video className='viewer_video' autoPlay={true} loop={true} playsInline={true} id='5'>
          <source src="/Videos/1564676296-national-geographic.mp4" type='video/mp4' />
        </video>
      </div>
    </div>
    
  )
}

export default Viewer

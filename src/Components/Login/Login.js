import React,{useState} from 'react'
import './Login.css'
import {auth,provider} from '../../firebase/config'
function Login() {
  const [user,setUser] = useState()
  
    const signIn = (e) => {
      e.preventDefault()
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user);
      })
        .catch((error) => {
          alert(error.message)
        })
    }
  
  return (
    <div className='login_container'>
      <div className='cta_logos'>
        <div className='cta_logo1'>
          <img src="/Images/cta-logo-one.svg" alt="" />
        </div>
        <div className='signup' onClick={signIn}>
          <a href="" className='signup_link' >GET ALL THERE</a>  
        </div>
        <div className='link_discription'>
           <h2>Subscribe and start streaming...</h2>
        </div>
        <div className='cta_logo2'>
          <img src="/Images/cta-logo-two.png" alt="" />
        </div>

      </div>
    </div>
  )
}

export default Login

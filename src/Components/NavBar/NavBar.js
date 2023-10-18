import React, { useEffect } from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../../firebase/config'
import { selectUserName, selectUserPhoto, setSignOut, setUserLogin } from '../../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'
function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
        navigate('/home')
      }
    })
  }, [userName])

  const signIn = (e) => {
    e.preventDefault()
    auth.signInWithPopup(provider).then((result) => {
      setUser(result.user);
    })
      .catch((error) => {
        alert(error.message)
      })
  }
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut())
      navigate('/')
    })
      .catch((error) => {
        alert(error.message);
      })
  }
  const setUser = (user) => {
    if (user) {
      dispatch(setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }));
    }
  };

  return (
    <div className='navbar_container'>
      <img className='logo' src="/Images/logo.svg" alt="Logo" />
      {!userName ? (
        <div className='user_login_container'>
          <div className='user_login'>
            <a onClick={signIn} className='login' href="">LOGIN</a>
          </div>
        </div>)
        :
        (
          <>
            <div className='navMenu'>
              <a className='imgbar_link'>
                <img className='imgbar' src="/Images/home-icon.svg" alt="Home" />
                <span className="navbar_span">HOME</span>
              </a>
              <a className='imgbar_link'>
                <img className='imgbar' src="/Images/search-icon.svg" alt="Search" />
                <span className="navbar_span">SEARCH</span>
              </a>
              <a className='imgbar_link'>
                <img className='imgbar' src="/Images/watchlist-icon.svg" alt="Watchlist" />
                <span className="navbar_span">WATCHLIST</span>
              </a>
              <a className='imgbar_link'>
                <img className='imgbar' src="/Images/original-icon.svg" alt="Originals" />
                <span className="navbar_span">ORIGINALS</span>
              </a>
              <a className='imgbar_link'>
                <img className='imgbar' src="/Images/movie-icon.svg" alt="" />
                <span className="navbar_span">MOVIES</span>
              </a>
              <a className='imgbar_link'>
                <img className='imgbar' src="/Images/series-icon.svg" alt="Series" />
                <span className="navbar_span">SERIES</span>
              </a>
            </div>
            <div className='signout'>
              <div className='user_img'>
                <img className='user_img' src={userPhoto} alt={userName} />
                <div className='dropdown'>
                  <span onClick={signOut}>Sign Out</span>
                </div>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default NavBar

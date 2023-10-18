import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Detail from './Components/Detail/Detail';
import Login from './Components/Login/Login';
import './index.css';
import './App.css'

function App() {
  return (
    <div className="App">
      
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Login />}>

            </Route>
            <Route path='/detail/:id' element={<Detail />}>

            </Route>
            <Route path='/home' element={<Home />}>

            </Route>

          </Routes>
        </Router>
      
    </div>
  );
};

export default App;

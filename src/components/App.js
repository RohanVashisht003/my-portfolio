import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import '../css/App.css';
import Header from './Header.js';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import { useEffect, useState } from 'react';
import Preloader from './Preloader';
import About from './About';
import Footer from './Footer';
import Project from './Project';
import Resume from './Resume';


function App() {
  const[load,setLoad] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoad(false);
    },1300)

    return ()=>clearTimeout(timer);
  },[]);

  return (
    // <Router>
    <div>
      <Preloader load={load}/>
    <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/project' element={<Project />}/>
          <Route path='/resume' element={<Resume />}/>
          <Route path='*' element={<Navigate replace to='/'/>}>
          </Route>
        </Routes>
        <Footer/>
    </div>
    </div>
    
    // </Router>
  );
}

export default App;

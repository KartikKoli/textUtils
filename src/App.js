import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import About from './components/About';
import {
  BrowserRouter as Router
} from "react-router-dom";
import {Routes,Route} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
     <Router>
     <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
     <div className="container my-3">
     <Routes>
      <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode}></TextForm>}/>
        
     <Route exact path="/about" element={<About/>}/>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;

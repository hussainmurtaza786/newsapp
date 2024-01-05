import './App.css';

import React, { useState } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Switch, Route, Link, Routes, } from "react-router-dom"

const App = () => {
  
const [progress, setProgress] = useState(0)

  

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          height={6}
          color='#f11946'
          progress={progress}
        />
        <switch>
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key={"general"} pagesize={6} country="in" category="General" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} key={"general"} pagesize={6} country="in" category="General" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} key={"Business"} pagesize={6} country="in" category="Business" />} />
            <Route exact path="/Entertainment" element={<News setProgress={setProgress} key={"Entertainment"} pagesize={6} country="in" category="Entertainment" />} />
            <Route exact path="/Genrealhealth" element={<News setProgress={setProgress} key={"Genrealhealth"} pagesize={6} country="in" category="Genrealhealth" />} />
            <Route exact path="/Science" element={<News setProgress={setProgress} key={"Science"} pagesize={6} country="in" category="Science" />} />
            <Route exact path="/Sports" element={<News setProgress={setProgress} key={"Sports"} pagesize={6} country="in" category="Sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} key={"technology"} pagesize={6} country="in" category="technology" />} />
          </Routes>
        </switch>
      </Router>

    </>
  )

}

export default App
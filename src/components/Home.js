import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Header from './Header'
import Nopage from './Nopage'
import Welcome from './Welcome'
import Register from './Register'
import NavBar from './NavBar'
import Dashboard from './Dashboard'
import PlayMode from './PlayMode'
import LeaderBoard from './LeaderBoard'
import COLORS from './constants/colors';




function App() {



  return (
    <Router>
    <div style={{ backgroundColor: COLORS.primary, display: "flex", }}>
    {/* <Header title={"i got ops"}/> */}
   

    <Routes>
    <Route path="/" exact element={
<>
    <Welcome/>
</>
    } />
    <Route path="/register" element={
<>
<Register />
</>
  } />
  <Route path="/dashboard" element={
<>
<NavBar/>
<Dashboard/>
      </>
  } />
  <Route path="/playmode" element={
<>
<NavBar/>
<PlayMode/>
      </>
  } />
  <Route path="/leaderboard" element={
<>
<NavBar/>
<LeaderBoard />
</>
  } />
  
  {/* Directly below is the genuine no-page router */}
  {/* <Route path="*" element={<Nopage/>} /> */}

  <Route path="*" element={
<>
<NavBar />
<Nopage/>
</>
  } />
    </Routes>
 
    
    
      </div>
     </Router>
  );
}


export default App;
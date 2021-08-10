import React, { useState } from 'react'
import './App.css';
//import Friend from './Friend';
import Friends from './Friends';

function App() {
  //add state for showing
  const [showing, setShowing] = useState(true);
  return (
    <div className="main">
    {showing ? <p>Can you see me now?</p> : null}
    <button onClick={() => setShowing(!showing)}>Toggle State</button>
 {/* <Friend />  */}
     <Friends /> 
    </div>
  );
}

export default App;

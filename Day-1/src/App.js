import './App.css';

import React, { useState, useEffect } from 'react'

function Scroller(){
  const [chiffre, setChiffre] = useState('');
  return (
    <>
    <div>
      <input type="range" onChange={e => setChiffre(e.target.value)} min="0" max="256"></input>
      {chiffre}
    </div>
    </>
    );
}

// Main App
export default function App() {
  const [colors] = useState(Array(3).fill(0))
  const [color, setColor] = useState("beige")
  const click = () => { 

    let hex0 = test.tostring(16); 
    let hex1 = test.tostring(16); 
    let hex2 = test.tostring(16); 

    let mix = '#'+hex0+hex1+hex2
    setColor(mix)
  }

  useEffect(()=>{
    document.body.style.backgroundColor = color
  }, [color])


  return (
    <div className="bg-stone-800" >

      <div>
        <Scroller id="0" value={colors[0]}/>
        {colors[0]}
        <Scroller id="1" value={colors[1]}/> 
        {colors[1]}
        <Scroller id="2" value={colors[2]}/> 
        {colors[2]}
        <button onClick ={() => click()}>Change color</button>
        
      </div>
    </div>
  )
  
}


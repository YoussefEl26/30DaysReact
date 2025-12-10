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

    let mix = '#'+'11'+'11'+'11'
    setColor(mix)
  }

  useEffect(()=>{
    document.body.style.backgroundColor = color
  }, [color])


  return (
    <div className="bg-stone-800" >

      <div>
        <Scroller value={colors[0]}/>
        {colors[0]}
        <Scroller value={colors[1]}/> 
        {colors[1]}
        <Scroller value={colors[2]}/> 
        {colors[2]}
        <button onClick ={() => click()}>Change color</button>
        
      </div>
    </div>
  )
  
}


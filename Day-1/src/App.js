import './App.css';

import React, { useState, useEffect } from 'react'

function Scroller({value, onChange}){
  return (
    <div>
      <input type="range"  min="0" max="255" value={value} onChange={e => onChange(Number(e.target.value))}></input>
      <span style={{ marginLeft: "10px" }}>{value}</span>
    </div>
    );
}

// Main App
export default function App() {
  const [colors, setColors] = useState([0,0,0]);
  const [color, setColor] = useState("beige");
  const click = () => { 

    let hex0 = colors[0].toString(16).padStart(2, "0");
    let hex1 = colors[1].toString(16).padStart(2, "0");
    let hex2 = colors[2].toString(16).padStart(2, "0");

    const hex = '#'+hex0+hex1+hex2
    setColor(hex)
  }

  useEffect(()=>{
    document.body.style.backgroundColor = color
  }, [color])


  return (
    <div>

      <div>
        <Scroller value={colors[0]} onChange={(v) => setColors([v, colors[1], colors[2]])}/> 

        <Scroller value={colors[1]} onChange={(v) => setColors([colors[0], v, colors[2]])}/> 
        <Scroller value={colors[2]} onChange={(v) => setColors([colors[0], colors[1], v])}/> 
        <button onClick ={() => click()}>Change color</button>
      </div>
    </div>
  )
  
}


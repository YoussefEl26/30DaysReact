import { useState } from 'react';
import './App.css';

function Touche({value, onChange}){

  

  return(
      <button className="touche" >{value}</button>
  )
}
function App() {
  const [resultat, setResultat] = useState('5252');


  return (
    <div className="App">
      <div className='Result Row'>
          {resultat}
      </div>
      <div className='First Row'>
        <Touche value='/' onClick={console.log("de")}/>
        <Touche value='*'/>
        <Touche value='-'/>
        <Touche value='+'/>

      </div>
      <div  className='Second Row'>
        <Touche value='7' onClick={(v) => console.log(v)}/>
        <Touche value='8' onClick={(v) => console.log(v)}/>
        <Touche value='9' onClick={(v) => console.log(v)}/>
        <Touche value='E' onClick={(v) => console.log(v)}/>
        
      </div>
      <div  className='Thrid Row'>
        <Touche value='4'/>
        <Touche value='5'/>
        <Touche value='6'/>
        <Touche value='.'/>
      </div>
      <div  className='Fourth Row'>
        <Touche value='1'/>
        <Touche value='2'/>
        <Touche value='3'/>
        <Touche value='0'/>
      </div>
      
      
    </div>
  );
}

export default App;

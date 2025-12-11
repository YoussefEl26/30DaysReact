import { useState } from 'react';
import './App.css';


function App() {
  const [resultat, setResultat] = useState('');


  return (
    <div className="App">
      <div className='Result Row'>
          <input type="text" value={resultat}></input>
      </div>

      <div className='First Row'>
        <input type="button" value='/' onClick={e => setResultat(resultat + e.target.value)}/>
        <input type="button" value='*' onClick={e => setResultat(resultat + e.target.value)}/>
        <input type="button" value='-' onClick={e => setResultat(resultat + e.target.value)}/>
        <input type="button" value='+' onClick={e => setResultat(resultat + e.target.value)}/>
      </div>

      <div  className='Second Row'>
        <input type="button" value='7' onClick={e => setResultat(resultat + e.target.value)}/>
        <input type="button" value='8' onClick={e => setResultat(resultat + e.target.value)}/>
        <input type="button" value='9' onClick={e => setResultat(resultat + e.target.value)}/>
        <input type="button" value='=' onClick={e => setResultat(eval(resultat))}/>
      </div>

      <div  className='Third Row'>
        <input type="button" value='4' onClick={e => setResultat(resultat + e.target.value)}/>
        <input type="button" value='5' onClick={e => setResultat(resultat + e.target.value)}/>
        <input type="button" value='6' onClick={e => setResultat(resultat + e.target.value)}/>
        <input type="button" value='.' onClick={e => setResultat(resultat + e.target.value)}/>
      </div>

      <div  className='Fourth Row'>
        <input type="button" value='1' onClick={e => setResultat(resultat + e.target.value)}/>
        <input type="button" value='2' onClick={e => setResultat(resultat + e.target.value)}/>
        <input type="button" value='3' onClick={e => setResultat(resultat + e.target.value)}/>
        <input type="button" value='0' onClick={e => setResultat(resultat + e.target.value)}/>
      </div>
      
      
    </div>
  );
}

export default App;

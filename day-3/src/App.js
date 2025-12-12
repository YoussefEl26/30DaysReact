import './App.css';

function Numero(temps){
  console.log(temps)
  return(
    <div>
      <div className='Branche1'></div>
      <div className='Branche2'></div>
      <div className='Branche3'></div>
      <div className='Branche4'></div>
      <div className='Branche5'></div>
      <div className='Branche6'></div>
      <div className='Branche7'></div>
    </div>
  )
}

function App() {
  const today = new Date();
  const showHours = today.getHours();
  const showMinutes = today.getMinutes();
  console.log(showHours);
  console.log(showMinutes);

  

  return (
    <div className="App">
      <div className="Fond">
        <div className='FirstDigit'>
          <Numero temps={showHours[0]}/>
          
        </div>
        <div className='SecondDigit'>
          <Numero temps={showHours[1]}/>
        </div>
        <div className='ThirdDigit'>
          <Numero temps={showMinutes[0]}/>
        </div>
        <div className='FourthDigit'>
          <Numero temps={showMinutes[1]}/>
        </div>
      </div>      
    </div>
  );
}

export default App;

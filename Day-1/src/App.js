import './App.css';

function App() {
  return (
    <body>
    
    <div id="couleur"></div>
    <div id="slider">
      <input type='range' id="red" name="red" min="0" max="256"/>
      <label for="red">Rouge</label>
      <input type='range' id="green" name="green" min="0" max="256"/>
      <label for="green">Vert</label>
      <input type='range' id="blue" name="blue" min="0" max="256"/>
      <label for="blue">Bleu</label>
      <input type='range' id="bw" name="bw" min="0" max="256"/>
      <label for="bw">Opacité</label>
    </div>
    
    </body>
    
  );
}

export default App;

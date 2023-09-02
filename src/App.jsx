import { useState } from "react";

import "./App.css";

function App() {
  const [startNumber, setStartNumber] = useState(1);
  const [endNumber, setEndNumber] = useState(100);
  const [winningNumber, setWinningNumber] = useState(null);

  const handleStartDraw = () => {
    const newWinningNumber =
      Math.floor(Math.random() * (endNumber - startNumber + 1)) + startNumber;
    setWinningNumber(newWinningNumber);
  };

  const handleStartNumberChange = (event) => {
    setStartNumber(event.target.value);
  };

  const handleEndNumberChange = (event) => {
    setEndNumber(event.target.value);
  };

  const handleReset=()=>{
    setWinningNumber(null)
  }

  return (
    <>
      <div>
        <header>
          <h1>Sorteo de Numeros</h1>
          {winningNumber === null ?(
            <div className="container">
              <p>Ingrese el rango de numero a rifar</p>
              <div>
                <input type="number" id="startNumber" value={startNumber} onChange={handleStartNumberChange}/>
              </div>
              <div>
                <input type="number" id="endNumber" value={endNumber} onChange={handleEndNumberChange} />
              </div>
              <button onClick={handleStartDraw}>
                iniciar Sorteo
              </button>
            </div>
          ):(
            <div>
              <p>El numero ganador es:</p>
              <h2>{winningNumber}</h2>
              <button onClick={handleReset} >Reiniciar Sorteo</button>

            </div>

          )}
        </header>
       
      </div>
    </>
  );
}

export default App;

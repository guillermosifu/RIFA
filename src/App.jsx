import { useState } from "react";

import "./App.css";

function App() {
  const [startNumber, setStartNumber] = useState(1);
  const [endNumber, setEndNumber] = useState(100);
  const[winningNumber,setWinningNumber]=useState(null)

const handleStartDraw = ()=>{
 const newWinningNumber = Math.floor(Math.random() * (endNumber - startNumber + 1)) + startNumber;
 setWinningNumber(newWinningNumber)
}


  const handleStartNumberChange = (event) => {
    setStartNumber(event.target.value);
  };


  const handleEndNumberChange = (event) => {
    setEndNumber(event.target.value);
  };

  return (
    <>
      <div>
        <header>
          <h1>Sorteos de Numeros</h1>
        </header>
        <div>
          <p>Ingrese el rango de numeros a Sortear</p>
          <div>
            <input
              type="number"
              placeholder="ingres el numero inicial"
              id="startNumber"
              onChange={handleStartNumberChange}
              value={startNumber}
            />
          </div>
          <div>
            <input type="number" id="endNumber" onChange={handleEndNumberChange} value={endNumber} />
          </div>
          <button onClick={handleStartDraw}>Inicia Sorteo</button>
        </div>
      </div>
    </>
  );
}

export default App;

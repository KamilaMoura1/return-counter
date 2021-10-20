import React, { useState, useEffect } from "react";

import MostraVoltas from "./components/return";
import MostraTempo from "./components/showTime";
import Button from "./components/button";
import "./App.css";

function App() {
  const [numVoltas, setNumVoltas] = useState(0);
  const [running, setRunning] = useState(false);
  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    let timer = null;
    if (running) {
      timer = setInterval(() => {
        setTempo((old) => old + 1);
      }, 1000);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [running]);

  const toggleRunning = () => {
    setRunning(!running);
  };

  const increment = () => {
    setNumVoltas(numVoltas + 1);
  };
  const decrement = () => {
    if (numVoltas > 0) {
      setNumVoltas(numVoltas - 1);
    }
  };
  const reset = () => {
    setNumVoltas(0);
    setTempo(0);
  };
  return (
    <>
      <header>
        <h1>Olá, seja bem-vinde ao Counter!</h1>
        <h2>Nosso contador mostra o tempo médio das suas voltas</h2>
      </header>
      <main className="App">
        <div>
          <MostraVoltas voltas={numVoltas} />
          <Button text="+" className="btn-g" onClick={increment} />
          <Button text="-" className="btn-p" onClick={decrement} />

          {numVoltas > 0 && (
            <MostraTempo tempo={Math.round(tempo / numVoltas)} />
          )}
        </div>
        <div>
          <Button
            onClick={toggleRunning}
            text={running ? "Pausar" : "Iniciar"}
            className="btn-iniciar"
          />
          <Button onClick={reset} text="Reininciar" className="btn-reiniciar" />
        </div>
      </main>
    </>
  );
}

export default App;

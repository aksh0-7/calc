import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");

  const Click = (value) => {
    setInput(input + value);
  };

  const Clear = () => {
    setInput("");
  };

  const  Backspace = () => {
    setInput(input.slice(0, -1));
  };

  const Calculate = () => {
    try {
      setInput(eval(input).toString()); 
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        <button onClick={() => Click("7")}>7</button>
        <button onClick={() => Click("8")}>8</button>
        <button onClick={() => Click("9")}>9</button>
        <button onClick={() => Click("/")} className='sign'>÷</button>
        <button onClick={() => Click("4")}>4</button>
        <button onClick={() => Click("5")}>5</button>
        <button onClick={() => Click("6")}>6</button>
        <button onClick={() => Click("*")} className='sign'>x</button>
        <button onClick={() => Click("1")}>1</button>
        <button onClick={() => Click("2")}>2</button>
        <button onClick={() => Click("3")}>3</button>
        <button onClick={() => Click("-")} className='sign'>-</button>
        <button onClick={() => Click("0")}>0</button>
        <button onClick={() => Click("00")}>00</button>
        <button onClick={() => Click(".")}>.</button>
        <button onClick={() => Click("+")} className='sign'>+</button>
        <button onClick={() => Calculate()} className="equals">=</button>
        <button onClick={() => Clear()} className="clear">C</button>
        <button onClick={() => Backspace()}>⌫</button>
        
      </div>
    </div>
  );
}

export default App;

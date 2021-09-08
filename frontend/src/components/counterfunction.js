import React, { useState } from "react";
import Counterclass from "./Counterclass";

function CounterFunction() {
  let [number, setNumber] = useState(0);

  function increment() {
    setNumber(++Number);
  }

  return (
    <div>
      <h3>Functional Component</h3>
      <h1>Counter={number}</h1>
      <button onClick={(e) => increment()}>Increment</button>
    </div>
  );
}

export default CounterFunction;

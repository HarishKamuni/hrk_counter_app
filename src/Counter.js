import React, { useState } from 'react';
import './style.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1 className="app">Counter app</h1>
      <div className="counter">
        <div className="container">
          <h1 className="number">{count}</h1>
        </div>

        <section className="btns-container">
          <button onClick={increment} className="increment">
            +
          </button>
          <button onClick={decrement} className="increment">
            -
          </button>
        </section>
      </div>
    </>
  );
}

export default Counter;

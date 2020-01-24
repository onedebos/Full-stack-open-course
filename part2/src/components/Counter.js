import React, { useState } from 'react';

const Counter = ({ counters }) => {
  const [counter, setCount] = useState({ count: 0 });
  const [inpt, setInpt] = useState('');
  const [counterObj, setCounterObj] = useState([]);

  let arr = [];
  const increment = () => setCount({ count: counter.count + 1 });
  const decrement = () => setCount({ count: counter.count - 1 });
  const handleInput = e => setInpt(e.target.value);
  const collectInput = e => {
    e.preventDefault();

    const inptObj = {
      num: counter.count,
      text: inpt,
    };
    setCounterObj(counterObj.concat(inptObj));
    console.log(counterObj);
    setInpt('');
  };
  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{counter.count}</span>
      <button onClick={decrement}>-</button>
      <form onSubmit={collectInput}>
        <input onChange={handleInput} value={inpt} />
        <button>submit</button>
      </form>
      <p>{inpt}</p>
    </div>
  );
};

export default Counter;

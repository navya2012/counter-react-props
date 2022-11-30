import React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  return (
    <div>
      <Display />
    </div>
  );
}
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);
function Display() {
  const [count, setCount] = useState(0);

  return (
    <div>
      You clicked {count} times <br />
      <Controls count={count} setCount={setCount} />
    </div>
  );
}

function Controls(props) {
  console.log(props);

  const increment = () => {
    props.setCount(props.count + 1);
  };
  const decrement = () => {
    props.setCount(props.count - 1);
  };
  return (
    <>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let timer;

    if (start) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(timer); // Stop the timer when start is false
    }

    // Cleanup the interval when the component unmounts or `start` changes
    return () => clearInterval(timer);
  }, [start]); // Re-run the effect when `start` changes

  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setStart(true)}>Start</button>
      <button onClick={() => setStart(false)}>Stop</button>
      <button onClick={()=> setCount(0)}>Reset</button>
    </>
  );
}

export default App;

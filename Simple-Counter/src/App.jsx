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
      <div className="container">
        <div className="counter_box">
          <h1>Counter</h1>
          <p>{count}</p>
          <div className='button_flex'>
            <button onClick={() => setStart(true)}>Start</button>
            <button onClick={() => setStart(false)}>Stop</button>
            <button onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;

import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [ticks, setTicks] = useState(0);       // every 0.1s tick
  const [start, setStart] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (start) {
      intervalRef.current = setInterval(() => {
        setTicks(t => t + 1); // tick every 0.1 second
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [start]);

  const handleReset = () => {
    setStart(false);
    setTicks(0);
    clearInterval(intervalRef.current);
  };

  // Derive count and point
  const count = Math.floor(ticks / 10); // seconds
  const point = ticks % 10;// tenths of a second

  return (
    <div className="container">
      <div className="counter_box">
        <h1>Counter App</h1>
        <p>{count}.{point}</p>
        <div className="button_flex">
          <button onClick={() => setStart(true)}>Start</button>
          <button onClick={() => setStart(false)}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;

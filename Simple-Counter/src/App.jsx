import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [point, setPoint] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let pointTimer;

    if (start) {
      pointTimer = setInterval(() => {
        setPoint(prev => {
          if (prev === 9) {
            setCount(c => c + 1); // increase count
            return 0; // reset point
          } else {
            return prev + 1;
          }
        });
      }, 100); // every 0.1 second
    }

    return () => clearInterval(pointTimer);
  }, [start]);

  const handleReset = () => {
    setStart(false);
    setCount(0);
    setPoint(0);
  };

  return (
    <div className="container">
      <div className="counter_box">
        <h1>Counter App</h1>
        <p>{count}.{point}</p>
        <div className='button_flex'>
          <button onClick={() => setStart(true)}>Start</button>
          <button onClick={() => setStart(false)}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;

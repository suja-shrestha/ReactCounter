import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearTimeout(timer);  // clean up
  }, [count]);  // re-run when count changes

  return (
    <>
      <div className="container">
        <div className="div">
          <p>Count: {count}</p>
        </div>
      </div>
    </>
  );
}

export default App;

import { HiMinus, HiPlus } from "react-icons/hi";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const getColorClass = () => {
    if (count > 0) return "count-positive";
    if (count < 0) return "count-negative";
    return "count-zero";
  };

  return (
    <div className="page">
      <div className="counter-container">
        <h1 className="counter-label">Counter</h1>

        <div className={`count-display ${getColorClass()}`}>{count}</div>

        <div className="btn-group">
          <button
            className="btn btn-decrement"
            aria-label="Decrease counter"
            onClick={() => setCount((c) => c - 1)}
          >
            <HiMinus />
          </button>

          <button
            className="btn btn-reset"
            aria-label="Reset counter"
            onClick={() => setCount(0)}
          >
            Reset
          </button>

          <button
            className="btn btn-increment"
            aria-label="Increase counter"
            onClick={() => setCount((c) => c + 1)}
          >
            <HiPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

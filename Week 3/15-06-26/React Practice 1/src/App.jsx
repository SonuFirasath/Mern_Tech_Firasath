import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function incCount()
  {
    setCount(count + 1);
    console.log(count);
  }
  return (
    <>
      <h2>Conter</h2>
      <div className="counter"><h3>{count}</h3></div>
      <button onClick={incCount}>Click me!</button>
    </>
  );
}

export default App;

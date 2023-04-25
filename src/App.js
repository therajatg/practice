import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [throttle, setThottle] = useState(false);

  const handleClick = () => {
    if (!throttle) {
      setThottle(true);
      setCount((prev) => prev + 1);
      setTimeout(() => setThottle(false), 1000);
    }
  };

  return (
    <div className="App">
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment count</button>
    </div>
  );
}

export default App;

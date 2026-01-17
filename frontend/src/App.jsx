import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("Loading...");

  useEffect(() => {
    fetch("/api/greet")
      .then((response) => response.text())
      .then((data) => setResult(data));
  }, []);

  return (
    <div>
      <h1>{result}</h1>
    </div>
  );

}

export default App
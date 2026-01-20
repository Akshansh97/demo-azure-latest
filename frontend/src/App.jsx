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
    <div className="container">
      <h1>{result}</h1>
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <style>
        {`
          /* Add some CSS animation magic to make the circles bounce */
          .wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .circle {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #646cff;
            margin: 10px;
            animation: bounce 3s ease-in-out infinite;
          }
          @keyframes bounce {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default App
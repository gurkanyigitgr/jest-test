import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const add = () => {
    setResult(parseInt(num1) + parseInt(num2));
  };
  const subtract = () => {
    setResult(parseInt(num1) - parseInt(num2));
  };
  const multiply = () => {
    setResult(parseInt(num1) * parseInt(num2));
  };
  const divide = () => {
    setResult(parseInt(num1) / parseInt(num2));
  };
  return (
    <div className="bg-green-950">
      <div className="container mx-auto h-screen flex flex-col items-center justify-center">
        <h1 className="text-white text-2xl">Messi</h1>
        <div className="bg-white p-10 rounded text-2xl">{result}</div>
        <div className="flex items-center justify-center">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <div>
          <button onClick={add}>Add</button>
          <button onClick={subtract}>Add</button>
          <button onClick={multiply}>Add</button>
          <button onClick={divide}>Add</button>
        </div>
      </div>
    </div>
  );
}

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
  const reset = () => {
    setResult(0);
    setNum1(0);
    setNum2(0);
  };
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center space-y-5">
      <h1 className="text-white text-5xl">Calculator</h1>
      <div data-testid="result" className="bg-white px-10 py-5 rounded text-5xl my-10">{result}</div>
      <div className="flex flex-col items-center justify-center space-y-5 sm:space-y-0 sm:flex-row sm:space-x-5">
        <input
          className="py-2 rounded text-center text-xl"
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          data-testid="num1"
        />
        <input
          className="py-2 rounded text-center text-xl"
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          data-testid="num2"
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-5 sm:space-y-0 sm:flex-row sm:space-x-5">
        <button data-testid="add" className="bg-red-300 py-2 px-10 rounded" onClick={add}>
          Add
        </button>
        <button data-testid="subtract" className="bg-blue-300 py-2 px-10 rounded" onClick={subtract}>
          Subtract
        </button>
        <button data-testid="multiply" className="bg-yellow-300 py-2 px-10 rounded" onClick={multiply}>
          Multiply
        </button>
        <button data-testid="divide" className="bg-green-300 py-2 px-10 rounded" onClick={divide}>
          Divide
        </button>
      </div>
      <button
      data-testid="reset"
        onClick={reset}
        className="bg-white text-black px-10 py-2 rounded font-semibold text-2xl mt-5"
      >
        Reset
      </button>
    </div>
  );
}

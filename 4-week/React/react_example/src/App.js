// App.js
import React, { useState } from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <Header />
      <div className="h-[500px] flex items-center">
        <Counter />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="w-1/2 bg-blue-500 text-white py-4 my-4 text-center shadow">
      <h1 className="text-2xl font-bold">간단한 React 예시 코드</h1>
    </header>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white p-8 shadow rounded text-center">
      <p className="text-lg font-bold mb-4">
        현재 카운트: <span className="text-blue-500">{count}</span>
      </p>
      <div className="space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setCount(count + 1)}
        >
          증가
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => setCount(count - 1)}
        >
          감소
        </button>
      </div>
    </div>
  );
}

export default App;

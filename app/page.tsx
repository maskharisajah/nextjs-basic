// clients components
"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Home</h1>
      <p>counter: {count}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
}

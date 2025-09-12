// client component

"use client";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <p>counter: {count}</p>
      <button onClick={increment}>increment</button>
    </>
  );
}

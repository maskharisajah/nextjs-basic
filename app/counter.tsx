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
      <button
        className='px-4 py-2 bg-blue-500 text-white rounded-md'
        onClick={increment}
      >
        increment
      </button>
    </>
  );
}

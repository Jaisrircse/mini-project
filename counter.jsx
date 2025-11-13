import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2 className="text-xl mb-2">Counter: {count}</h2>
      <button onClick={()=>setCount(count+1)} className="bg-green-500 px-4 py-2 rounded mr-2">+</button>
      <button onClick={()=>setCount(count-1)} className="bg-red-500 px-4 py-2 rounded">-</button>
    </div>
  );
}

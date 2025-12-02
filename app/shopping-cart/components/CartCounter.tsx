'use client';
import { useState } from "react";

interface Props {
  value?: number;
}
export const  CartCounter = ({value = 0}: Props) => {
  const [count, setCount] = useState(value);

  return (
     <div className="flex flex-col items-center">
      <div className="w-full flex justify-center">
        <span className="text-9xl">{count}</span>
      </div>

      <div className="flex mt-4 gap-2 justify-center">
        <button
          onClick={() => setCount(count + 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-blue-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
        >
          -1
        </button>
      </div>
    </div>
  )
}

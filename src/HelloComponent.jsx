import React, { useState } from "react";
import useDocTitle from "./useDocTitle";

const HelloComponent = () => {

  const [count, setCount] = useState(0);

  const updateCounter = () => {
    setCount(prev => prev + 1);
  };

  useDocTitle("Green", count);

  return (
    <div className="border rounded-lg p-4 bg-gray-50">

      <h2 className="text-lg font-semibold text-green-600 mb-3">
        Hello Component - {count}
      </h2>

      <button
        onClick={updateCounter}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        You clicked me {count} times
      </button>

    </div>
  );
};

export default HelloComponent;
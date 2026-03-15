import React from "react";
import useCounter from "./useCounter";

const HaiComponent = () => {

  const [count, doIncrement, doDecrement, doReset] =
    useCounter(10, 10);

  return (
    <div className="border rounded-lg p-4 bg-gray-50">

      <h2 className="text-lg font-semibold text-blue-600 mb-3">
        Hai Component - {count}
      </h2>

      <div className="flex justify-center gap-3">

        <button
          onClick={doIncrement}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Increment
        </button>

        <button
          onClick={doDecrement}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Decrement
        </button>

        <button
          onClick={doReset}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Reset
        </button>

      </div>

    </div>
  );
};

export default HaiComponent;
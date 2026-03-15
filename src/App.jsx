import React, { useState, useMemo } from "react";

const App = () => {

  const [numbers, setNumbers] = useState({
    firstNum: 10,
    secondNum: 10
  });

  const result = useMemo(() => {
    console.log("Calculating sum...");
    return numbers.firstNum + numbers.secondNum;
  }, [numbers.firstNum, numbers.secondNum]);

  const changeNumbers = () => {
    setNumbers(prev => ({
      ...prev,
      firstNum: prev.firstNum + 5
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-lg rounded-xl p-8 w-[420px] text-center">

        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          useMemo Hook Demo
        </h2>

        <p className="text-lg font-semibold text-gray-700 mb-6">
          {numbers.firstNum} + {numbers.secondNum} = 
          <span className="text-green-600 ml-2">{result}</span>
        </p>

        <button
          onClick={changeNumbers}
          className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Change Numbers
        </button>

      </div>

    </div>
  );
};

export default App;
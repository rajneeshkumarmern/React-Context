import React from "react";
import HelloComponent from "./HelloComponent";
import HaiComponent from "./HaiComponent";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-lg rounded-xl p-8 w-[420px] text-center space-y-6">

        <h1 className="text-2xl font-bold text-blue-600">
          Custom Counter Hook Demo
        </h1>

        <HelloComponent />
        <HaiComponent />

      </div>

    </div>
  );
};

export default App;
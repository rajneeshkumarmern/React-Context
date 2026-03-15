import React, { useState } from "react";
import PriceComponent from "./PriceComponent";

const App = () => {

  console.log("[App] - Rendered");

  const [courseName, setCourseName] = useState("React JS");
  const [coursePrice, setCoursePrice] = useState(10000);

  const updateName = () => {
    setCourseName(prev =>
      prev === "React JS" ? "React JS 16" : "React JS"
    );
  };

  const updatePrice = () => {
    setCoursePrice(prev =>
      prev === 10000 ? 12000 : 10000
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-lg rounded-xl p-8 w-[420px]">

        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Course Details
        </h2>

        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold">Course Name: {courseName}</p>

          <button
            onClick={updateName}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            Update Name
          </button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <p className="font-semibold">Course Price: ₹{coursePrice}</p>

          <button
            onClick={updatePrice}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            Update Price
          </button>
        </div>

        <PriceComponent price={coursePrice} />

      </div>

    </div>
  );
};

export default App;
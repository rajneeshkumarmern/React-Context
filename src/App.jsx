import React from "react";

import { MyCourseProvider } from "./CourseContext";
import CourseComponent from "./CourseComponent";

const App = () => {
  return (
    <MyCourseProvider>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">
        
        <div className="bg-white shadow-lg rounded-xl p-8 w-[500px]">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
            React Context + Reducer Example
          </h2>

          <CourseComponent />

        </div>

      </div>
    </MyCourseProvider>
  );
};

export default App;
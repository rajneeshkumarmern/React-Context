import React from "react";

import { MyStudentProvider } from "./StudentContext";
import { MyCourseProvider } from "./CourseContext";

import StudentComponent from "./StudentComponent";
import CourseComponent from "./CourseComponent";
import TestComponent from "./TestComponent";

const App = () => {
  return (
    <MyStudentProvider>
      <MyCourseProvider>

        <div className="min-h-screen bg-gray-100 flex justify-center items-start p-10">

          <div className="w-full max-w-xl">

            <StudentComponent />
            <CourseComponent />
            <TestComponent />

          </div>

        </div>

      </MyCourseProvider>
    </MyStudentProvider>
  );
};

export default App;
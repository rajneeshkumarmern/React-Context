import React, { useContext } from "react";
import { MyCourseContext } from "./CourseContext";

const CourseComponent = () => {
  const { courseId, courseName, cost, trainer } =
    useContext(MyCourseContext);

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-6 border">
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        Course Info
      </h2>

      <div className="space-y-2 text-gray-700">
        <p><span className="font-semibold">Course ID:</span> {courseId}</p>
        <p><span className="font-semibold">Course Name:</span> {courseName}</p>
        <p><span className="font-semibold">Cost:</span> ₹{cost}</p>
        <p><span className="font-semibold">Trainer:</span> {trainer}</p>
      </div>
    </div>
  );
};

export default CourseComponent;
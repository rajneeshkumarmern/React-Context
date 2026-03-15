import React, { useContext } from "react";
import { MyStudentContext } from "./StudentContext";
import { MyCourseContext } from "./CourseContext";

const TestComponent = () => {
  const student = useContext(MyStudentContext);
  const course = useContext(MyCourseContext);

  return (
    <div className="bg-white shadow-md rounded-xl p-6 border">
      <h2 className="text-2xl font-bold text-purple-600 mb-4">
        Student + Course Info
      </h2>

      <div className="space-y-2 text-gray-700">
        <p><span className="font-semibold">Student ID:</span> {student.studentId}</p>
        <p><span className="font-semibold">Student Name:</span> {student.studentName}</p>
        <p><span className="font-semibold">Email:</span> {student.email}</p>
        <p><span className="font-semibold">Phone:</span> {student.phone}</p>

        <hr className="my-3"/>

        <p><span className="font-semibold">Course ID:</span> {course.courseId}</p>
        <p><span className="font-semibold">Course Name:</span> {course.courseName}</p>
        <p><span className="font-semibold">Cost:</span> ₹{course.cost}</p>
        <p><span className="font-semibold">Trainer:</span> {course.trainer}</p>
      </div>
    </div>
  );
};

export default TestComponent;
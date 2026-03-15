import React, { useContext } from "react";
import { MyStudentContext } from "./StudentContext";

const StudentComponent = () => {
  const { studentId, studentName, email, phone } =
    useContext(MyStudentContext);

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-6 border">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Student Info
      </h2>

      <div className="space-y-2 text-gray-700">
        <p><span className="font-semibold">Student ID:</span> {studentId}</p>
        <p><span className="font-semibold">Student Name:</span> {studentName}</p>
        <p><span className="font-semibold">Email:</span> {email}</p>
        <p><span className="font-semibold">Phone:</span> {phone}</p>
      </div>
    </div>
  );
};

export default StudentComponent;
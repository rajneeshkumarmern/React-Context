import React from "react";

const CourseComponent = ({ courseName, price }) => {

  console.log(courseName, "[CourseComponent] - Rendered");

  return (
    <div className="font-semibold text-gray-700">
      {courseName} - ₹{price}
    </div>
  );
};

export default React.memo(CourseComponent);
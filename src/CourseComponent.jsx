import React, { useContext } from "react";
import { MyCourseContext } from "./CourseContext";

import {
  UPDATE_CNAME,
  UPDATE_PRICE,
  UPDATE_DURATION,
  UPDATE_TRAINER
} from "./courseTypes";

const CourseComponent = () => {

  const { courseData, courseDispatch } = useContext(MyCourseContext);

  const { courseId, courseName, price, duration, trainer } = courseData;

  const updateCourseName = () => {
    courseDispatch({
      type: UPDATE_CNAME,
      payload: "Master React 16"
    });
  };

  const updatePrice = () => {
    courseDispatch({
      type: UPDATE_PRICE,
      payload: 13000
    });
  };

  const updateDuration = () => {
    courseDispatch({
      type: UPDATE_DURATION,
      payload: "75 Hrs"
    });
  };

  const updateTrainer = () => {
    courseDispatch({
      type: UPDATE_TRAINER,
      payload: "Srinivas Dande"
    });
  };

  return (
    <div className="space-y-4">

      <div className="flex justify-between items-center border-b pb-2">
        <p className="font-semibold">Course Id:</p>
        <p>{courseId}</p>
      </div>

      <div className="flex justify-between items-center border-b pb-2">
        <p className="font-semibold">Course Name:</p>
        <p>{courseName}</p>
        <button
          onClick={updateCourseName}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Update
        </button>
      </div>

      <div className="flex justify-between items-center border-b pb-2">
        <p className="font-semibold">Price:</p>
        <p>₹{price}</p>
        <button
          onClick={updatePrice}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Update
        </button>
      </div>

      <div className="flex justify-between items-center border-b pb-2">
        <p className="font-semibold">Duration:</p>
        <p>{duration}</p>
        <button
          onClick={updateDuration}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Update
        </button>
      </div>

      <div className="flex justify-between items-center">
        <p className="font-semibold">Trainer:</p>
        <p>{trainer}</p>
        <button
          onClick={updateTrainer}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Update
        </button>
      </div>

    </div>
  );
};

export default CourseComponent;
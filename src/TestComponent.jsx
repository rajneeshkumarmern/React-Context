import React, { useState, useCallback } from "react";
import HeaderComponent from "./HeaderComponent";
import CourseComponent from "./CourseComponent";
import ButtonComponent from "./ButtonComponent";

const TestComponent = () => {

  console.log("[TestComponent] - Rendered");

  const [reactPrice, setReactPrice] = useState(10000);
  const [angularPrice, setAngularPrice] = useState(10000);
  const [devOpsPrice, setDevOpsPrice] = useState(10000);

  const updateReactPrice = useCallback(() => {
    setReactPrice(prev => prev + 2000);
  }, []);

  const updateAngularPrice = useCallback(() => {
    setAngularPrice(prev => prev + 2000);
  }, []);

  const updateDevOpsPrice = useCallback(() => {
    setDevOpsPrice(prev => prev + 2000);
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 w-[420px]">

      <HeaderComponent />

      <div className="space-y-4 mt-6">

        <div className="flex justify-between items-center border-b pb-2">
          <CourseComponent courseName="React" price={reactPrice} />
          <ButtonComponent clickHandler={updateReactPrice}>
            Update React Price
          </ButtonComponent>
        </div>

        <div className="flex justify-between items-center border-b pb-2">
          <CourseComponent courseName="Angular" price={angularPrice} />
          <ButtonComponent clickHandler={updateAngularPrice}>
            Update Angular Price
          </ButtonComponent>
        </div>

        <div className="flex justify-between items-center">
          <CourseComponent courseName="DevOps" price={devOpsPrice} />
          <ButtonComponent clickHandler={updateDevOpsPrice}>
            Update DevOps Price
          </ButtonComponent>
        </div>

      </div>

    </div>
  );
};

export default TestComponent;
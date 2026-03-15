import React, { createContext, useState } from "react";

export const MyCourseContext = createContext();

export const MyCourseProvider = ({ children }) => {

  const [courseInfo] = useState({
    courseId: "C-11",
    courseName: "Spring MicroServices",
    cost: 18000,
    trainer: "Srinivas Dande",
  });

  return (
    <MyCourseContext.Provider value={courseInfo}>
      {children}
    </MyCourseContext.Provider>
  );
};
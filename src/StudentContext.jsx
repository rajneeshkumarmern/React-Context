import React, { createContext } from "react";

export const MyStudentContext = createContext();

const initialState = {
  studentId: 101,
  studentName: "Dandes",
  email: "dandes@jlc.com",
  phone: 55555,
};

export const MyStudentProvider = ({ children }) => {
  return (
    <MyStudentContext.Provider value={initialState}>
      {children}
    </MyStudentContext.Provider>
  );
};
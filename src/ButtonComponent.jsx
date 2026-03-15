import React from "react";

const ButtonComponent = ({ clickHandler, children }) => {

  return (
    <button
      onClick={clickHandler}
      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
    >
      {children}
    </button>
  );
};

export default React.memo(ButtonComponent);
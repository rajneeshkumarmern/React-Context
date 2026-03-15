import React from "react";

const HeaderComponent = () => {

  console.log("[HeaderComponent] - Rendered");

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-blue-600">
        useCallback Hook Demo
      </h2>
    </div>
  );
};

export default React.memo(HeaderComponent);
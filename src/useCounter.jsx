import { useState } from "react";

const useCounter = (initialCount = 0, value = 1) => {

  const [count, setCount] = useState(initialCount);

  const doIncrement = () => {
    setCount(prev => prev + value);
  };

  const doDecrement = () => {
    setCount(prev => prev - value);
  };

  const doReset = () => {
    setCount(initialCount);
  };

  return [count, doIncrement, doDecrement, doReset];
};

export default useCounter;
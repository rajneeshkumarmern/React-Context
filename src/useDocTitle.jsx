import { useEffect } from "react";

const useDocTitle = (color, count) => {

  useEffect(() => {
    document.title = `You clicked ${color} button ${count} times`;
  }, [color, count]);

};

export default useDocTitle;
import { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggleClick = () => {
    setToggle((prev) => !prev);
  };

  return { toggle, handleToggleClick };
};

export default useToggle;

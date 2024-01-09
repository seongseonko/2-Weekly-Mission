import { createContext } from "react";

const ButtonIdContext = createContext(null);

export const ButtonIdContextProvider = ({ children, value }) => {
  return (
    <ButtonIdContext.Provider value={value}>
      {children}
    </ButtonIdContext.Provider>
  );
};
export default ButtonIdContext;

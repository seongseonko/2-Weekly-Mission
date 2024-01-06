import { createContext } from "react";

export const CardDataContext = createContext(null);

export const CardDataProvider = ({ children, value }) => {
  if (value) {
    return (
      <CardDataContext.Provider value={value}>
        {children}
      </CardDataContext.Provider>
    );
  }
};

import React, { createContext, useContext, useState } from "react";
const Context = createContext([]);

export const usePortfolioContext = () => useContext(Context);

const PortfolioContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Context.Provider
      value={{
        darkMode,
        setDarkMode
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default PortfolioContextProvider;

import { createContext, useContext, useState } from "react";

const UrlContext = createContext();

const UrlProvider = ({ children }) => {
  const [activeUrlLight, setActiveUrlLight] = useState();

  const value = {
    activeUrlLight,
    setActiveUrlLight,
  };

  return <UrlContext.Provider value={value}>{children}</UrlContext.Provider>;
};

export { UrlContext, UrlProvider };

export const useUrlContext = () => {
  return useContext(UrlContext);
};

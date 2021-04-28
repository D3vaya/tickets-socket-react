import React, { createContext, useState } from "react";

export const UIContext = createContext();

export const UiProvider = ({ children }) => {
  const [hideMenu, setHideMenu] = useState(false);
  const showMenu = () => {
    setHideMenu(false);
  };
  const hidingMenu = () => {
    setHideMenu(true);
  };
  return (
    <UIContext.Provider
      value={{
        hideMenu,
        showMenu,
        hidingMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

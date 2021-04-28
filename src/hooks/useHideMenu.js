import { useContext, useEffect } from "react";
import { UIContext } from "../context/UIContext";

export const useHideMenu = (hide) => {
  const { showMenu, hidingMenu } = useContext(UIContext);
  useEffect(() => {
    if (hide) {
      hidingMenu();
    } else {
      showMenu();
    }
  }, [hide, hidingMenu, showMenu]);
};

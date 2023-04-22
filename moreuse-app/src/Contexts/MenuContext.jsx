import React, {createContext, useState} from "react";

const initialState = {
  isOpen: false
};

export const MenuContext = createContext(initialState);

export const MenuContextStore = (props) => {

  const [menuState, setMenuState] = useState(initialState);

  const onChangeOpenCloseMenu = () => {
    setMenuState({ ...menuState, isOpen: !menuState.isOpen });
  }

  return (
    <MenuContext.Provider value={{ menuState, onChangeOpenCloseMenu }}>
      { props.children }
    </MenuContext.Provider>
  )
}

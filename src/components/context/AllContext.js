//TREAT AS IMPORTANT!!! MAKE SURE THIS FILE IS ASSESIBLE GLOBALLY AND IMPORTED INTO THE APP JS OR THE PARENT COMPONENT WHERE IT IS NEEDED BY ALL THE CHILDREN
import React, { createContext, useState } from "react";
const AllContext = createContext();

const AllProvider = ({ children }) => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  
  
  return (
    <AllContext.Provider value={{
        isNavbarVisible, setIsNavbarVisible
        }}>
        {children}
        </AllContext.Provider>
        );
  };

  export {AllContext, AllProvider};
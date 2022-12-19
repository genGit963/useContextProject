import React from "react";
// -------------- creating Data globally to share ---------------
export const themes = {

  light: {
    frontColor: "black",
    backColor: "#ffccbc"
  },

  dark: {
    frontColor: "white",
    backColor: "#282c34"
  }
};

// --------------------- Creating context for globally shareable -----------
export const ChooseTheme = React.createContext(themes.light);

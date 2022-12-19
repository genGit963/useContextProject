import React, { useState } from "react";

import "./App.css";
import Demo from "./page/demo";
import { ChooseTheme, themes } from "./use-context/useContext";


function App() {

  const [themeState, setThemeState] = useState(themes.dark);

  const themeBtnSt = {
    background: "black",
    color: "white",
    margin: "20px 85%",
    borderRadius: "5px",
    height: "40px",
    width: "auto",
    fontSize: "19px",
    cursor:"pointer"
  }

  function changeTheme() {
    if (themeState === themes.dark) {
      setThemeState(themes.light);
    } else {
      setThemeState(themes.dark)
    }
  }

  return (
    <div className="App">

      <h3>Representing on App.js file </h3>
      <button style={themeBtnSt} onClick={changeTheme}>ChangeTheme</button>

      {/* ----------------- UseContext ---------------- */}
      <ChooseTheme.Provider value={themeState}>
        <Demo />
      </ChooseTheme.Provider>

    </div>
  );
}

export default App;
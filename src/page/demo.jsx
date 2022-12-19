import React, { useContext } from "react";
import { ChooseTheme } from "../use-context/useContext";

function Demo() {

  const aboutHooks = "Hooks are functions that let you “hook into”  React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes. (We don't recommend rewriting your existing components overnight but  you can start using Hooks in the new ones if you'd like.)";

  const useContextTheme = useContext(ChooseTheme);

  var ackContext = ""

  if (useContextTheme) {
    ackContext = "------------- the useContext Worked Well -------------------------";
  } else {
    ackContext = "------------- the useContext Doesn't Work -------------------------";

  }
  return (
    <div className="demo-page" style={{ color: useContextTheme.frontColor, background: useContextTheme.backColor }}>

      <h1>Demo Page for useContext Hooks</h1>

      <p>
        Accepts a context object the value
        returned from React.createContext and returns the
        current context value for that context. The current context value is
        determined by the value prop of the nearest MyContext.Provider
        above the calling component in the tree.
        When the nearest MyContext.Provider above the component updates,
        this Hook will trigger a rerender with the latest context value passed to
        that MyContext provider. Even if an ancestor uses React.memo or shouldComponentUpdate,
        a rerender will still happen
        starting at the component itself using useContext.
        Dont forget that the argument to useContext must be the context
        object itself:
      </p>

      <h1>Shortly about Hooks</h1>
      <footer>{aboutHooks}</footer> <br /><br /><br />


      <p>Ack useContext: {ackContext}</p>

    </div>
  );
}

export default Demo;
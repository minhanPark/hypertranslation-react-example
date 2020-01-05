import React from "react";
import Screen from "./Screen";
import LangContextProvider from "./context";
import translations from "./translations";

function App() {
  return (
    <LangContextProvider defaultLang="en" translations={translations}>
      <Screen />
    </LangContextProvider>
  );
}

export default App;

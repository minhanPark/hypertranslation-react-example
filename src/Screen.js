import React from "react";
import { useSetLang, useTranslate } from "./context";

const Screen = () => {
  const setLang = useSetLang();
  const translate = useTranslate();
  return (
    <>
      <h1>{translate("login")}</h1>
      <h1>{translate("logout")}</h1>
      <button onClick={() => setLang("en")}>english</button>
      <button onClick={() => setLang("kr")}>한국어</button>
      <button onClick={() => setLang("jp")}>日本語</button>
      <button onClick={() => setLang("ru")}>Русский</button>
    </>
  );
};

export default Screen;

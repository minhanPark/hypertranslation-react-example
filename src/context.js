import React, { useContext, useState, createContext } from "react";

const LangContext = createContext();

const LangContextProvider = ({ defaultLang, children, translations }) => {
  const [lang, setLang] = useState(defaultLang);
  const hyperTranslate = text => {
    return translations[lang][text];
  };
  return (
    <LangContext.Provider value={{ setLang, translate: hyperTranslate }}>
      {children}
    </LangContext.Provider>
  );
};

export const useSetLang = () => {
  const { setLang } = useContext(LangContext);
  return setLang;
};

export const useTranslate = () => {
  const { translate } = useContext(LangContext);
  return translate;
};

export default LangContextProvider;

import { useContext, createContext, useState } from "react";

const defaultLanguageValue = {
  language: "english"
};

const LanguageContext = createContext({ defaultLanguageValue });

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => useContext(LanguageContext);

export { LanguageProvider, useLanguage };

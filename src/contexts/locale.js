import React, { createContext, useState } from "react";
import { tr, en } from "locale";

export const LocaleContext = createContext();

export const LocaleProvider = (props) => {
  const { children } = props;
  const [locale, setLocale] = useState(tr);

  const changeLocale = (value) => {
    if (value === "tr") {
      setLocale(tr);
    }
    if (value === "en") {
      setLocale(en);
    }
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale: changeLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

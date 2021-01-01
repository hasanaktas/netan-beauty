import { useContext } from "react";
import { LocaleContext } from "contexts";

const useLocale = () => {
  const { locale, setLocale } = useContext(LocaleContext);
  return [locale, setLocale];
};

export default useLocale;

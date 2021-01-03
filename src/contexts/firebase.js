import React, { createContext } from "react";
import { useDetails, useProducts, useAuth } from "hooks";
import { Loading } from "components";
export const FirebaseContext = createContext();

export const FirebaseProvider = (props) => {
  const { children } = props;
  const { loading: detailsLoading, details } = useDetails();
  const { loading: productsLoading, products } = useProducts();
  const { initializing, user } = useAuth();

  let loading = productsLoading || detailsLoading || initializing;

  return (
    <FirebaseContext.Provider value={{ details, loading, products, user }}>
      {children}
    </FirebaseContext.Provider>
  );
};

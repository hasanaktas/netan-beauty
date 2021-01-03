import { useContext } from "react";
import { FirebaseContext } from "contexts";

const useFirebase = () => {
  const { details, loading, products, user } = useContext(FirebaseContext);
  return { details, loading, products, user };
};

export default useFirebase;

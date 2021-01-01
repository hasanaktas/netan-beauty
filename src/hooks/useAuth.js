import { useEffect, useState } from "react";
import firebase from "firebase/app";

const useAuth = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  function onChange(user) {
    if (user) {
      setInitializing(false);
      setUser(user);
    } else {
      setInitializing(false);
      setUser(null);
    }
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
    return () => unsubscribe();
  }, []);

  return { initializing, user };
};

export default useAuth;

import { useEffect, useState } from "react";
import firebase from "firebase/app";

const useProducts = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        const products = [];
        snapshot.forEach((doc) => {
          console.warn(doc.data());
          products.push({ ...doc.data(), id: doc.id });
        });
        setLoading(false);
        setProducts(products);
      })
      .catch((err) => setError(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    error,
    loading,
    products,
  };
};

export default useProducts;

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
      .orderBy("order")
      .get()
      .then((snapshot) => {
        const products = [];
        snapshot.forEach((doc) => {
          products.push({ ...doc.data(), id: doc.id });
        });
        setProducts(products);
        setLoading(false);
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

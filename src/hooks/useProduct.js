import { useEffect, useState } from "react";
import firebase from "firebase/app";

const useProduct = (productId) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({
    name: {
      tr: "",
      en: "",
    },
    subName: {
      tr: "",
      en: "",
    },
    price: {
      normal: 0,
      pseudo: 0,
    },
    options: [
      {
        color: "#ABB8C3",
        images: [],
        saleChannel: [
          { link: "", shop: "hepsiburada" },
          { link: "", shop: "n11" },
          { link: "", shop: "trendyol" },
        ],
      },
    ],
  });

  useEffect(() => {
    if (productId === "new") {
      setLoading(false);
    } else {
      firebase
        .firestore()
        .collection("products")
        .doc(productId)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setProduct({ ...doc.data(), id: doc.id });
          } else {
            console.log("No such document!");
          }

          setLoading(false);
        })
        .catch((err) => setError(err));
    }
  }, []);

  return {
    error,
    loading,
    product,
    setProduct,
  };
};

export default useProduct;

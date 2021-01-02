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
    properties: [
      {
        icon: 0,
        title: {
          tr: "",
          en: "",
        },
      },
    ],
    boxes: [
      {
        icon: 0,
        title: {
          tr: "",
          en: "",
        },
        subTitle: {
          tr: "",
          en: "",
        },
      },
    ],
    promotion: {
      images: [],
      title: {
        tr: "",
        en: "",
      },
      properties: [
        {
          icon: 0,
          title: {
            tr: "",
            en: "",
          },
          subTitle: {
            tr: "",
            en: "",
          },
        },
      ],
    },
    easyToUse: [
      {
        title: {
          tr: "",
          en: "",
        },
        subTitle: {
          tr: "",
          en: "",
        },
        images: [],
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const save = async () => {
    if (productId === "new") {
      return firebase.firestore().collection("products").add(product);
    } else {
      return firebase
        .firestore()
        .collection("products")
        .doc(productId)
        .set(product);
    }
  };

  const remove = async (id) => {
    return firebase.firestore().collection("products").doc(id).delete();
  };

  return {
    error,
    loading,
    product,
    setProduct,
    save,
    remove,
  };
};

export default useProduct;

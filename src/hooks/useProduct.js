import { useEffect, useState } from "react";
import firebase from "firebase/app";

const useProduct = (seoUrl, productId) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({
    seoUrl: "",
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
    if (seoUrl === "new") {
      setLoading(false);
    } else {
      firebase
        .firestore()
        .collection("products")
        .where("seoUrl", "==", seoUrl)
        .get()
        .then((snapshot) => {
          const products = [];
          snapshot.forEach((doc) => {
            console.warn(doc.data());
            products.push({ ...doc.data(), id: doc.id });
          });
          setLoading(false);

          setProduct(products[0]);
        })
        .catch((err) => setError(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const save = async () => {
    if (seoUrl === "new") {
      return firebase.firestore().collection("products").add(product);
    } else {
      return firebase
        .firestore()
        .collection("products")
        .doc(product.id)
        .set(product);
    }
  };

  const remove = async () => {
    return firebase.firestore().collection("products").doc(product.id).delete();
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

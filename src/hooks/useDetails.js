import { useEffect, useState } from "react";
import firebase from "firebase/app";

const useDetails = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({
    contact: {
      email: "",
      phone: "",
      fax: "",
      marketplace: {
        hepsiburada: "",
        trendyol: "",
        n11: "",
      },
      adress: {
        tr: "",
        en: "",
      },
      social: {
        facebook: "",
        twitter: "",
        instagram: "",
        youtube: "",
      },
    },
  });

  useEffect(() => {
    firebase
      .firestore()
      .collection("details")
      .get()
      .then((snapshot) => {
        const details = {};
        snapshot.forEach((doc) => {
          details[doc.id] = { ...doc.data() };
        });

        setDetails(details);
        setLoading(false);
      })
      .catch((err) => setError(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveContact = async () => {
    return firebase
      .firestore()
      .collection("details")
      .doc("contact")
      .set(details.contact);
  };

  const saveAbout = async () => {
    return firebase
      .firestore()
      .collection("details")
      .doc("about")
      .set(details.about);
  };
  const saveHome = async () => {
    return firebase
      .firestore()
      .collection("details")
      .doc("home")
      .set(details.home);
  };

  return {
    error,
    loading,
    details,
    setDetails,
    saveContact,
    saveAbout,
    saveHome,
  };
};

export default useDetails;

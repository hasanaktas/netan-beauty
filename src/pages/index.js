import { useLayoutEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import routes from "./routes";
import { Loading } from "components";
import { useFirebase } from "hooks";
const Pages = () => {
  const { loading, user } = useFirebase();
  const { pathname } = useLocation();
  let routing = useRoutes(routes(user));
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (loading) {
    return <Loading />;
  }

  return routing;
};

export default Pages;

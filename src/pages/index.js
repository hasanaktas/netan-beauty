import { useLayoutEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import routes from "./routes";
import { Loading } from "components";
import { useAuth } from "hooks";
const Pages = () => {
  const { initializing, user } = useAuth();
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  let routing = useRoutes(routes(user));

  if (initializing) {
    return <Loading />;
  }
  return routing;
};

export default Pages;

import { useLayoutEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import routes from "./routes";
import { useAuth } from "hooks";
const Pages = () => {
  const { user } = useAuth();
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  let routing = useRoutes(routes(user));

  return routing;
};

export default Pages;

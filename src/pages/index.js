import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { useAuth } from "hooks";
const Pages = () => {
  const { user } = useAuth();
  let routing = useRoutes(routes(user));

  return routing;
};

export default Pages;

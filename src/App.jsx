import DashboardRouter from "./DashboardRouter";
import PublicRouter from "./PublicRouter";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";

const App = () => {
  const cookies = new Cookies();
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(cookies.get("access_token"));
  }, [cookies]);

  return (
    <div className={`App `}>
      {token ? <DashboardRouter /> : <PublicRouter />}
    </div>
  );
};
export default App;

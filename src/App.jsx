import { useState } from "react";
import DashboardRouter from "./DashboardRouter";
import PublicRouter from "./PublicRouter";

const App = () => {
  const [token, setToken] = useState(false);
  return (
    <div className={`App `}>
      {token ? <DashboardRouter /> : <PublicRouter />}
    </div>
  );
};
export default App;

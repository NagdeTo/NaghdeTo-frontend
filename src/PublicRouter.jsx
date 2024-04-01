import Header from "./components/Public-layouts/Header";
import { BrowserRouter } from "react-router-dom";

const PublicRouter = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

export default PublicRouter;

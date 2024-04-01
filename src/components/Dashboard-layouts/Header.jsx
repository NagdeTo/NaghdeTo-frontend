import { PageHeader } from "@ant-design/pro-components";
import logo from "../../assets/images/logo.svg";
const Header = () => {
  return (
    <PageHeader
      style={{ direction: "rtl" }}
      title="نقدتو"
      avatar={{
        src: logo,
        style: {
          width: "4.2rem",
          height: "2.5rem",
        },
      }}
    >
      ;;;
    </PageHeader>
  );
};

export default Header;

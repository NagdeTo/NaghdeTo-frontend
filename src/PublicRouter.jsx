import Header from "./components/Public-layouts/Header";
import HeroSection from "./components/Public-layouts/HeroSection";
import bg from "./assets/images/shape2.png";

const PublicRouter = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${bg})` }}>
        <Header />
        <HeroSection />
      </div>
      {/* <div
        style={{
          zIndex: "-1",
          backgroundColor: "pink",
          width: "100rem",
          height: "70rem",
          borderRadius: "6rem",
          position: "absolute",
          right: "7rem",
          bottom: "0rem",
          opacity: "0.7",
          transform: "rotate(-130deg)",
          boxShadow: "0 0 40px gray",
          left: "-70rem",
        }}
      ></div> */}
    </>
  );
};

export default PublicRouter;

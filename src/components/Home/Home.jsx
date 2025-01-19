// import banner from "../../assets/tesla-banner.jpg";
// import Header from "../Header/Header";
// import {
//   HomeWrapper,
//   SectionWrapper,
//   SectionItemBox,
//   SectionHead,
//   LearnMoreBtn,
// } from "./style";
// import modely from "../../assets/4-modely.jpg";
// import models from "../../assets/3-modelS.jpg";
// import modelX from "../../assets/tesla-4.webp";
// import model3 from "../../assets/home-model3.webp";
// import { useNavigate } from "react-router-dom";
// import { apiDatas } from "../../ApiSlice/ApiSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";

// const Home = () => {
//   const { apiData } = useSelector((state) => state.api);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(apiDatas());
//   }, [dispatch]);

//   console.log(apiData, "data");

//   const navigate = useNavigate();
//   const items = [
//     { src: models, label: "Model S", path: "model-s" },
//     { src: modely, label: "Model Y", path: "model-y" },
//     { src: model3, label: "Model 3", path: "model-3" },
//     { src: modelX, label: "Model X", path: "model-x" },
//   ];

//   const handleLearnMore = (path) => {
//     navigate(`/cardetails/${path}`);
//   };

//   return (
//     <div>
//       <HomeWrapper>
//         <Header />
//         <img
//           src={banner}
//           alt="tesla-banner"
//           style={{ width: "100%", objectFit: "cover" }}
//         />
//       </HomeWrapper>

//       {items.map((item, index) => (
//         <SectionWrapper key={index}>
//           <img src={item.src} width="100%" alt={item.label} />
//           <SectionItemBox>
//             <SectionHead>{item.label}</SectionHead>
//             <LearnMoreBtn onClick={() => handleLearnMore(item.path)}>
//               Learn More
//             </LearnMoreBtn>
//           </SectionItemBox>
//         </SectionWrapper>
//       ))}
//     </div>
//   );
// };

// export default Home;

import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Header from "../Header/Header";
import { apiDatas } from "../../ApiSlice/ApiSlice";
import modely from "../../assets/4-modely.jpg";
import models from "../../assets/3-modelS.jpg";
import modelX from "../../assets/tesla-4.webp";
import model3 from "../../assets/home-model3.webp";
import banner from "../../assets/tesla-banner.jpg";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [activeSection, setActiveSection] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const { apiData } = useSelector((state) => state.api);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sectionsRef = useRef([]);

  const items = [
    {
      src: banner,
      label: "Experience Tesla",
      subtext: "Schedule a Demo Drive Today",
      path: "demo-drive",
      dark: false,
      buttonText: "Order Now",
    },
    {
      src: models,
      label: "Model S",
      path: "model-s",
      dark: true,
      buttonText: "View Inventory",
    },
    {
      src: modely,
      label: "Model Y",
      path: "model-y",
      dark: true,
      buttonText: "Custom Order",
    },
    {
      src: model3,
      label: "Model 3",
      path: "model-3",
      dark: false,
      buttonText: "Learn More",
    },
    {
      src: modelX,
      label: "Model X",
      path: "model-x",
      dark: true,
      buttonText: "Custom Order",
    },
  ];

  useEffect(() => {
    dispatch(apiDatas());

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop - windowHeight / 2) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  const handleLearnMore = (path) => {
    navigate(`/cardetails/${path}`);
  };

  const scrollToNext = (currentIndex) => {
    if (currentIndex < items.length - 1) {
      const nextSection = sectionsRef.current[currentIndex + 1];
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const mainContainerStyle = {
    height: "100vh",
    overflowY: "auto",
    scrollSnapType: "y mandatory",
    position: "relative",
  };

  const sectionStyle = {
    height: "100vh",
    width: "100%",
    position: "relative",
    scrollSnapAlign: "start",
  };

  const imageContainerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const contentContainerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "150px 40px 80px 40px",
  };

  const headerContainerStyle = {
    textAlign: "center",
    marginBottom: "20px",
  };

  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
  };

  const buttonGroupStyle = {
    display: "flex",
    gap: "24px",
    justifyContent: "center",
  };

  const primaryButtonStyle = (dark) => ({
    backgroundColor: dark ? "#ffffff" : "#000000",
    color: dark ? "#000000" : "#ffffff",
    padding: "12px 80px",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "1px",
    border: "none",
    cursor: "pointer",
    transition: "opacity 0.3s",
    opacity: 0.9,
  });

  const secondaryButtonStyle = (dark) => ({
    backgroundColor: dark
      ? "rgba(23, 26, 32, 0.8)"
      : "rgba(255, 255, 255, 0.65)",
    color: dark ? "#ffffff" : "#000000",
    padding: "12px 80px",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "1px",
    border: "none",
    cursor: "pointer",
    transition: "opacity 0.3s",
    opacity: 0.9,
  });

  const titleStyle = (dark) => ({
    fontSize: "40px",
    fontWeight: "500",
    color: dark ? "#ffffff" : "#171a20",
    marginBottom: "8px",
    letterSpacing: "0.5px",
  });

  const scrollIndicatorStyle = (dark) => ({
    animation: "bounce 2s infinite",
    color: dark ? "#ffffff" : "#171a20",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    padding: "8px",
  });

  const disclaimerStyle = (dark) => ({
    position: "absolute",
    bottom: "20px",
    width: "100%",
    textAlign: "center",
    fontSize: "12px",
    color: dark ? "#ffffff" : "#393c41",
    opacity: 0.85,
  });

  return (
    <div style={mainContainerStyle}>
      {items.map((item, index) => (
        <section
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="tesla-section"
          style={sectionStyle}
        >
          <div style={imageContainerStyle}>
            <img src={item.src} alt={item.label} style={imageStyle} />
          </div>

          {index === 0 && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
              }}
            >
              <Header />
            </div>
          )}

          <div style={contentContainerStyle}>
            <div style={headerContainerStyle}>
              <h1 style={titleStyle(item.dark)}>{item.label}</h1>
            </div>

            <div style={buttonContainerStyle}>
              <div style={buttonGroupStyle}>
                <button
                  onClick={() => handleLearnMore(item.path)}
                  style={primaryButtonStyle(item.dark)}
                  onMouseOver={(e) => (e.target.style.opacity = 1)}
                  onMouseOut={(e) => (e.target.style.opacity = 0.9)}
                >
                  {item.buttonText}
                </button>
                {index === 0 && (
                  <button
                    onClick={() => handleLearnMore("inventory")}
                    style={secondaryButtonStyle(item.dark)}
                    onMouseOver={(e) => (e.target.style.opacity = 1)}
                    onMouseOut={(e) => (e.target.style.opacity = 0.9)}
                  >
                    Inventory
                  </button>
                )}
              </div>

              {index < items.length - 1 && (
                <button
                  onClick={() => scrollToNext(index)}
                  style={scrollIndicatorStyle(item.dark)}
                  aria-label="Scroll to next section"
                >
                  <KeyboardArrowDownIcon style={{ fontSize: "32px" }} />
                </button>
              )}
            </div>
          </div>

          {index === 0 && (
            <div style={disclaimerStyle(item.dark)}>
              *Price before savings. Excluding taxes and fees.
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default Home;

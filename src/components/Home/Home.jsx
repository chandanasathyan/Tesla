import banner from "../../assets/tesla-banner.jpg";
import Header from "../Header/Header";
import {
  HomeWrapper,
  SectionWrapper,
  SectionItemBox,
  SectionHead,
  LearnMoreBtn,
} from "./style";
import modely from "../../assets/4-modely.jpg";
import models from "../../assets/3-modelS.jpg";
import modelX from "../../assets/tesla-4.webp";
import model3 from "../../assets/home-model3.webp";

const Home = () => {
  const items = [
    { src: models, label: "Model S" },
    { src: modely, label: "Model Y" },
    { src: model3, label: "Model 3" },
    { src: modelX, label: "Model X" },
  ];
  return (
    <div>
      <HomeWrapper>
        <Header />
        <img
          src={banner}
          alt="tesla-banner"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </HomeWrapper>

      {items.map((item, index) => (
        <SectionWrapper key={index}>
          <img src={item.src} width="100%" />
          <SectionItemBox>
            <SectionHead>{item.label}</SectionHead>
            <LearnMoreBtn>Learn More</LearnMoreBtn>
          </SectionItemBox>
        </SectionWrapper>
      ))}
    </div>
  );
};

export default Home;

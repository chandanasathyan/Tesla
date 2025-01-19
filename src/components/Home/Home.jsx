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
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const items = [
    { src: models, label: "Model S", path: "model-s" },
    { src: modely, label: "Model Y", path: "model-y" },
    { src: model3, label: "Model 3", path: "model-3" },
    { src: modelX, label: "Model X", path: "model-x" },
  ];

  const handleLearnMore = (path) => {
    navigate(`/cardetails/${path}`);
  };

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
          <img src={item.src} width="100%" alt={item.label} />
          <SectionItemBox>
            <SectionHead>{item.label}</SectionHead>
            <LearnMoreBtn onClick={() => handleLearnMore(item.path)}>
              Learn More
            </LearnMoreBtn>
          </SectionItemBox>
        </SectionWrapper>
      ))}
    </div>
  );
};

export default Home;
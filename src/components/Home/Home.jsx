
import banner from "../../assets/tesla-banner.jpg";
import Header from '../Header/Header';
import { HomeWrapper, SectionWrapper } from "./style";
import modely from "../../assets/model-y.jpg"
import models from "../../assets/model-s3.jpg"
import modelX from "../../assets/model-x.jpg"
import model3 from "../../assets/model-3.jpg"
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <HomeWrapper>
        <Header />
        <img src={banner} alt='tesla-banner' style={{ width: "100%", objectFit: "cover" }} />
      </HomeWrapper>

      <SectionWrapper>
        <img src={modely} width="100%" />
        <Typography>Model 3</Typography>
      </SectionWrapper>

      <SectionWrapper>
        <img src={models} width="100%" />
        <Typography>Model S</Typography>
      </SectionWrapper>

      <SectionWrapper>
        <img src={modelX} width="100%" />
        <Typography>Model X</Typography>
      </SectionWrapper>

      <SectionWrapper>
        <img src={model3} width="100%" />
        <Typography>Model Y</Typography>
      </SectionWrapper>
    </div>
  )
}

export default Home
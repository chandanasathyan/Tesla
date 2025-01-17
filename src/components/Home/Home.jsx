import React from 'react'
import banner from "../../assets/tesla-banner.jpg";
import Header from '../Header/Header';
import { HomeWrapper, SectionWrapper } from "./style";

const Home = () => {
  return (
    <div>
        <HomeWrapper>
            <Header />
            <img src={banner} alt='tela-banner' style={{width: "100%", objectFit: "cover"}} />
        </HomeWrapper>

        <SectionWrapper></SectionWrapper>
    </div>
  )
}

export default Home
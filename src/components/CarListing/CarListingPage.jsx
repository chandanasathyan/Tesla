import { useEffect, useState } from "react";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import SpeedIcon from "@mui/icons-material/Speed";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import teslaImg from "../../assets/tesla-electric.jpg";
import {
    PageContainer,
    HeroSection,
    HeroImage,
    HeroOverlay,
    HeroContent,
    HeroTitle,
    HeroSubtitle,
    ModelsSection,
    SectionTitle,
    ModelsGrid,
    CarCard,
    CarImage,
    CarInfo,
    CarTitle,
    CarDescription,
    SpecsGrid,
    SpecItem,
    FeaturesContainer,
    FeaturesList,
    FeatureItem,
    CardFooter,
    Price,
    LearnMoreBtn,
    ImpactSection,
    ImpactGrid,
    ImpactCard,
    ImpactTitle,
    ImpactDescription,
    Container,
} from "./style";
import { useNavigate } from "react-router-dom";
import { apiDatas } from "../../ApiSlice/ApiSlice";
import { useDispatch, useSelector } from "react-redux";


const CarListingPage = () => {
    const { apiData } = useSelector((state) => state.api);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(apiDatas());
    }, [dispatch]);

    console.log(apiData, "data");

    // eslint-disable-next-line no-unused-vars
    const [selectedModel, setSelectedModel] = useState(null);
    const navigate = useNavigate();

    const handleLearnMore = () => {
        navigate("/cardetails");
    };
    const handleButtonClick = (car) => {
        setSelectedModel(car);
        handleLearnMore();
    };

    return (
        <PageContainer>
            <HeroSection>
                <HeroImage src={teslaImg} alt="Tesla Hero" />
                <HeroOverlay>
                    <HeroContent>
                        <HeroTitle>Tesla Experience</HeroTitle>
                        <HeroSubtitle>The Future of Electric Vehicles</HeroSubtitle>
                    </HeroContent>
                </HeroOverlay>
            </HeroSection>

            <ModelsSection>
                <SectionTitle>Featured Models</SectionTitle>
                <ModelsGrid>
                    {apiData && apiData?.map((car) => (
                        <CarCard key={car.id}>
                            <CarImage>
                                <img src={car.img} alt={car.model} />
                            </CarImage>

                            <CarInfo>
                                <CarTitle>Tesla {car.model}</CarTitle>
                                <CarDescription>{car.description}</CarDescription>

                                <SpecsGrid>
                                    <SpecItem iconColor="#4ade80">
                                        <BatteryChargingFullIcon />
                                        <span>Range: {car.range}</span>
                                    </SpecItem>
                                    <SpecItem iconColor="#3b82f6">
                                        <SpeedIcon />
                                        <span>{car.acceleration}</span>
                                    </SpecItem>
                                </SpecsGrid>

                                <FeaturesContainer>
                                    <CarTitle as="h4">Key Features</CarTitle>
                                    <FeaturesList>
                                        {car.features.map((feature, index) => (
                                            <FeatureItem key={index}>
                                                <ElectricCarIcon />
                                                <span>{feature}</span>
                                            </FeatureItem>
                                        ))}
                                    </FeaturesList>
                                </FeaturesContainer>

                                <CardFooter>
                                    <Price>{car.price}</Price>
                                    <LearnMoreBtn onClick={() => handleButtonClick(car)}>
                                        Learn More
                                    </LearnMoreBtn>
                                </CardFooter>
                            </CarInfo>
                        </CarCard>
                    ))}
                </ModelsGrid>
            </ModelsSection>

            <ImpactSection>
                <Container>
                    <SectionTitle>Environmental Impact</SectionTitle>
                    <ImpactGrid>
                        <ImpactCard>
                            <LocalGasStationIcon />
                            <ImpactTitle>Zero Emissions</ImpactTitle>
                            <ImpactDescription>
                                100% electric vehicles with zero direct emissions
                            </ImpactDescription>
                        </ImpactCard>

                        <ImpactCard>
                            <BatteryChargingFullIcon />
                            <ImpactTitle>Sustainable Energy</ImpactTitle>
                            <ImpactDescription>
                                Powered by renewable energy sources
                            </ImpactDescription>
                        </ImpactCard>

                        <ImpactCard>
                            <ElectricCarIcon />
                            <ImpactTitle>Clean Future</ImpactTitle>
                            <ImpactDescription>
                                Contributing to a sustainable transportation future
                            </ImpactDescription>
                        </ImpactCard>
                    </ImpactGrid>
                </Container>
            </ImpactSection>
        </PageContainer>
    );
};

export default CarListingPage;

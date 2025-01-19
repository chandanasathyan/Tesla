import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Button } from "@mui/material";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PageContainer = styled("div")(() => ({
    minHeight: "100vh",
    backgroundColor: "#fff",
}));

export const HeroSection = styled("div")(() => ({
    position: "relative",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
}));

export const HeroImage = styled("img")(() => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "scale(1.1)",
    transition: "transform 0.3s ease-out",
    "&:hover": {
        transform: "scale(1)",
    },
}));

export const HeroOverlay = styled("div")(() => ({
    position: "absolute",
    inset: 0,
    background: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const HeroContent = styled("div")(() => ({
    textAlign: "center",
    color: "#fff",
    animation: `${fadeIn} 1s ease-out`,
}));

export const HeroTitle = styled("h1")(() => ({
    fontSize: "3.75rem",
    fontWeight: 300,
    marginBottom: "1rem",
    letterSpacing: "1px",
    "@media (min-width: 768px)": {
        fontSize: "4.5rem",
    },
}));

export const HeroSubtitle = styled("p")(() => ({
    fontSize: "1.25rem",
    fontWeight: 300,
    letterSpacing: "0.5px",
}));

export const ModelsSection = styled("div")(() => ({
    maxWidth: "80rem",
    margin: "0 auto",
    padding: "4rem 1rem",
}));

export const SectionTitle = styled("h2")(() => ({
    fontSize: "2.5rem",
    fontWeight: 300,
    textAlign: "center",
    marginBottom: "4rem",
    letterSpacing: "0.5px",
}));

export const ModelsGrid = styled("div")(() => ({
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "2rem",
    "@media (min-width: 768px)": {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
}));

export const CarCard = styled("div")(() => ({
    position: "relative",
    overflow: "hidden",
    borderRadius: "0.5rem",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    "&:hover": {
        boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)",
        transform: "translateY(-4px)",
    },
}));

export const CarImage = styled("div")(() => ({
    height: "16rem",
    overflow: "hidden",
    "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.3s ease",
    },
    "&:hover img": {
        transform: "scale(1.05)",
    },
}));

export const CarInfo = styled("div")(() => ({
    padding: "2rem",
}));

export const CarTitle = styled("h3")(() => ({
    fontSize: "1.875rem",
    fontWeight: 300,
    marginBottom: "0.5rem",
    letterSpacing: "0.5px",
}));

export const CarDescription = styled("p")(() => ({
    fontSize: "1.125rem",
    color: "#4b5563",
    marginBottom: "1.5rem",
    lineHeight: 1.6,
}));

export const SpecsGrid = styled("div")(() => ({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1rem",
    marginBottom: "1.5rem",
}));

export const SpecItem = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#374151",
    "& svg": {
        color: "#3b82f6",
    },
}));

export const FeaturesContainer = styled("div")(() => ({
    margin: "1.5rem 0",
}));

export const FeaturesList = styled("ul")(() => ({
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "0.75rem",
    marginTop: "1rem",
}));

export const FeatureItem = styled("li")(() => ({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#4b5563",
    "& svg": {
        color: "#9ca3af",
    },
}));

export const CardFooter = styled("div")(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "2rem",
}));

export const Price = styled("span")(() => ({
    fontSize: "1.5rem",
    fontWeight: 300,
    color: "#111827",
}));

export const LearnMoreBtn = styled(Button)(() => ({
    backgroundColor: "#2563eb",
    color: "#fff",
    padding: "0.75rem 2rem",
    borderRadius: "0.25rem",
    fontWeight: "500",
    transition: "all 0.3s ease",
    "&:hover": {
        backgroundColor: "#1d4ed8",
        transform: "translateY(-2px)",
    },
    "&:active": {
        transform: "translateY(0)",
    },
}));

export const ImpactSection = styled("div")(() => ({
    backgroundColor: "#f9fafb",
    padding: "4rem 0",
}));

export const ImpactGrid = styled("div")(() => ({
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "2rem",
    textAlign: "center",
    "@media (min-width: 768px)": {
        gridTemplateColumns: "repeat(3, 1fr)",
    },
}));

export const ImpactCard = styled("div")(() => ({
    padding: "2rem",
    transition: "transform 0.3s ease",
    "&:hover": {
        transform: "translateY(-4px)",
    },
    "& svg": {
        fontSize: "3.75rem",
        color: "#10b981",
        marginBottom: "1rem",
    },
}));

export const ImpactTitle = styled("h3")(() => ({
    fontSize: "1.25rem",
    fontWeight: 500,
    marginBottom: "0.75rem",
    color: "#111827",
}));

export const ImpactDescription = styled("p")(() => ({
    color: "#4b5563",
    lineHeight: 1.6,
}));

export const Container = styled("div")(() => ({
    maxWidth: "80rem",
    margin: "0 auto",
    padding: "0 1rem",
}));

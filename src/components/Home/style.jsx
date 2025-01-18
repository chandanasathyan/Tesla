import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

const HomeWrapper = styled(Box)(() => ({
  position: "relative",
}));

const SectionWrapper = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
}));

const SectionItemBox = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
}));

const SectionHead = styled(Typography)(() => ({
  position: "absolute",
  top: "10%",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "3rem",
  fontWeight: "bold",
  color: "#fff",
}));

const LearnMoreBtn = styled(Button)(() => ({
  position: "absolute",
  bottom: "10%",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "10px 20px",
  fontSize: "1rem",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  textDecoration: "none",
}));

export {
  HomeWrapper,
  SectionWrapper,
  SectionItemBox,
  SectionHead,
  LearnMoreBtn,
};

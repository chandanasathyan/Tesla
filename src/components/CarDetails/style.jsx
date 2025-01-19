import styled from "@emotion/styled";
import { Card, Button, Typography } from '@mui/material';

export const StyledCard = styled(Card)(() => ({
    marginBottom: "2rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
}))

export const ColorButton = styled(Button)(({ selected, color }) => ({
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    border: `2px solid ${selected ? '#1976d2' : '#e0e0e0'}`,
    backgroundColor: color,
    cursor: "pointer",
    transition: "all 0.3s ease",
    '&:hover': {
        transform: "scale(1.1)",
    },
}));

export const SectionTitle = styled(Typography)(() => ({
    fontSize: "1.5rem",
    fontWeight: 600,
    marginBottom: "1rem",
    color: "#333",
}));

export const Description = styled(Typography)(() => ({
    color: "#666",
    lineHeight: "1.6",
    marginBottom: "2rem"
}))

export const VariantsGrid = styled('div')(() => ({
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "1rem",
    marginBottom: "2rem",
    // [theme.breakpoints.up('md')]: {
    //     gridTemplateColumns: "1fr 1fr",
    // },
}));

export const VariantCard = styled(Card)(() => ({
    height: "100%",
    '& .MuiCardContent-root': {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
}));

export const SpecsList = styled('ul')(() => ({
    listStyle: "none",
    padding: 0,
    margin: 0,
    '& li': {
        padding: "0.5rem 0",
        borderBottom: "1px solid #eee",
        '&:last-child': {
            borderBottom: "none",
        },
    },
}));

export const BuildPriceButton = styled(Button)(() => ({
    width: "100%",
    padding: "1rem",
    fontSize: "1.1rem",
    textTransform: "none",
    marginTop: "1rem",
    // [theme.breakpoints.up('md')]: {
    //     width: "auto",
    //     minWidth: "200px",
    // },
}));

export const ErrorContainer = styled('div')(() => ({
    textAlign: "center",
    padding: "3rem 1rem",
    '& h2': {
        color: "#333",
        marginBottom: "1rem",
    },
}));

export const PageContainer = styled('div')(() => ({
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem 1rem"
}));

export const CarImage = styled('img')(() => ({
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "2rem",
    objectFit: "cover"
}));

export const ColorSelectorWrapper = styled('div')(() => ({
    display: "flex",
    gap: "1rem",
    marginBottom: "2rem"
}));

export const Section = styled('div')(() => ({
    marginBottom: "2rem"
}));
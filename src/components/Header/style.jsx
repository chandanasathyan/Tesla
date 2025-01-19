import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material"

const HeaderWrapper = styled(Box)(() => ({
    position: 'absolute',
    top: '30px', // Set the header's vertical position
    left: '0',   // Align it to the left of the container
    width: '100%', // Ensure it spans the full width
    display: "flex",
    justifyContent: "space-between", // Distribute space between logo and items
}));

const HeaderImgWrapper = styled(Box)(() => ({
    marginLeft: "50px"
}));

const HeaderItemWrapper = styled(Box)(() => ({
    marginRight: "50px"
}));

const HeaderItems = styled(Typography)(() => ({
    textTransform: "uppercase",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer"
}));

export { HeaderWrapper, HeaderImgWrapper, HeaderItemWrapper, HeaderItems };
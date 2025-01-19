import logo from "../../assets/tesla-logo-png-2244.png";
import {
    HeaderWrapper,
    HeaderImgWrapper,
    HeaderItemWrapper,
    HeaderItems,
} from "./style";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/carlisting");
    };
    return (
        <>
            <HeaderWrapper>
                <HeaderImgWrapper>
                    <img
                        src={logo}
                        alt="logo"
                        width="130"
                        style={{ filter: "invert(100%) brightness(200%)" }}
                    />
                </HeaderImgWrapper>
                <HeaderItemWrapper>
                    <HeaderItems onClick={handleClick}>List of Cars</HeaderItems>
                </HeaderItemWrapper>
            </HeaderWrapper>
        </>
    );
};

export default Header;

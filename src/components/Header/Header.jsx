import logo from "../../assets/tesla-logo-png-2244.png";
import {
  HeaderWrapper,
  HeaderImgWrapper,
  HeaderItemWrapper,
  HeaderItems,
} from "./style";

const Header = () => {
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
          <HeaderItems>Products</HeaderItems>
        </HeaderItemWrapper>
      </HeaderWrapper>
    </>
  );
};

export default Header;

import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import lightLogo from "../../assets/dark-logo.png";

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  width: 174px;
  height: 40px;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary}; font-family: Trebuchet MS; font-style: normal; font-weight: bold; font-size: 20px; line-height: 23px;`}
`;

const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 31px;
  margin-left: 31px;
  margin-top: 31px;
  margin-bottom: 50px;
`;

function Header() {
  return (
    <DivContainer>
      <img src={lightLogo} alt="light-logo" />
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </nav>
    </DivContainer>
  );
}

export default Header;

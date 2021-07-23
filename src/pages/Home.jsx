import React from "react";
import styled from "styled-components";
import homeIllustration from "../assets/home-illustration.svg";
import colors from "../utils/style/colors";
import { Link } from "react-router-dom";

const DivContainer = styled.div`
  background: #f9f9fc;
  position: absolute;
  width: 1313px;
  height: 824px;
  left: 65px;
  top: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const DivContainerText = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledText = styled.p`
  width: 552px;
  height: 249px;
  font-family: Trebuchet MS;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 160.5%;
  color: #2f2e41;
  margin-bottom: 70px;
`;

const StyledImg = styled.img`
  /*position: absolute;*/
  width: 541px;
  height: 506px;
  /*left: 760px;
  top: 339px;*/
`;

const StyledLink = styled(Link)`
  font-family: "comfortaa";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 22px;
  color: #ffffff;
  margin-top: 70px;
  text-align: center;
  align-content: center;
  width: 261px;
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

function Home() {
  return (
    <DivContainer>
      <DivContainerText>
        <StyledText>
          Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents
        </StyledText>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </DivContainerText>
      <div>
        <StyledImg src={homeIllustration} alt="home-illustration" />
      </div>
    </DivContainer>
  );
}

export default Home;

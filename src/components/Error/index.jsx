import React from "react";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import OupsImg from "../../assets/404.svg";

const OupsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DivContainer = styled.div`
  margin: 30px;
  background-color: ${colors.backgroundLight};
  padding: 60px 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 1200px;
  width: 1313px;
  height: 1256px;
`;

const OupsTitle = styled.h1`
  font-family: Trebuchet MS;
  font-style: normal;
  font-weight: bold;
  font-size: 31px;
  line-height: 36px;
  color: #2f2e41;
  margin-bottom: 100px;
`;

const OupsImage = styled.img`
  width: 875px;
  height: 476px;
  margin-bottom: 100px;
`;

function Error() {
  return (
    <OupsWrapper>
      <DivContainer>
        <OupsTitle>Oups...</OupsTitle>
        <OupsImage src={OupsImg} alt="Error page" />
        <OupsTitle>Il semblerait qu’il y ait un problème</OupsTitle>
      </DivContainer>
    </OupsWrapper>
  );
}

export default Error;

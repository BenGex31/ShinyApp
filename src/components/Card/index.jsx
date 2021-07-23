import React from "react";
import PropTypes from "prop-types";
import DefaultPicture from "../../assets/user-img.png";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const CardLabel = styled.span`
  font-family: Trebuchet MS;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  color: #5843e4;
`;

const CardImage = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 90px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 339px;
  height: 334px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <span>{title}</span>
    </CardWrapper>
  );
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
};

Card.defaultProps = {
  label: "",
  title: "",
  picture: DefaultPicture
};

export default Card;

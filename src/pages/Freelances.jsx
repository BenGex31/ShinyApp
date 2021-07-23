import React from "react";
import DefaultPicture from "../assets/user-img.png";
import Card from "../components/Card";
import styled from "styled-components";

const freelanceProfiles = [
  {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: DefaultPicture
  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    picture: DefaultPicture
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    picture: DefaultPicture
  },
  {
    name: "Lauren Ipsum",
    jobTitle: "UX Designer",
    picture: DefaultPicture
  }
];

const ContainerDiv = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`;

function Freelances() {
  return (
    <ContainerDiv>
      <ContainerText>
        <h1>Trouver votre prestataire</h1>
        <p>Chez Shiny nous réunissons les meilleurs profils pour vous.</p>
      </ContainerText>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </ContainerDiv>
  );
}

export default Freelances;

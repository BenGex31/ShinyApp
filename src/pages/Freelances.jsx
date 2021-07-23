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

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(4, 1fr);
`;

function Freelances() {
  return (
    <div>
      <h1>Freelances</h1>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </div>
  );
}

export default Freelances;

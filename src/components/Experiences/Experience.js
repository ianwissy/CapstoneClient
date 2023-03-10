import styled from "styled-components";

import { keywords } from "../../config";

import Icon from "../Icon";
import Flag from "../Flag";
import Rating from "../Rating";
import Keyword from "../Keywords/Keyword";
import Button from "../Button";

const Experience = ({ experience, addExperienceToItinerary }) => {
  const { name, description, rating, photos, country, country_code } =
    experience;

  const keyword = keywords[experience.keywords[0]];

  return (
    <Container>
      <Photo url={photos[0]}>
        <Country>
          <Flag code={country_code} margin="0 8px 0 0" />
          {country}
        </Country>
      </Photo>
      <Content>
        <Banner>
          <Name>{name}</Name>
          <Rating rating={rating} />
        </Banner>
        <Description>{description}</Description>
        <Banner>
          <Keyword text={keyword.text} icon={keyword.icon} />
          <Button onClick={() => addExperienceToItinerary(experience)}>
            <Icon icon="plus" />
          </Button>
        </Banner>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 160px 1fr;
  grid-template-rows: 120px;
  gap: 20px;
  margin-bottom: 20px;
`;

const Photo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
`;

const Country = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 8px;
  left: 8px;
  padding: 6px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-weight: 700;
  font-size: 14px;
  border-radius: 50px;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.neutral["700"]};
`;

const Description = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  font-size: 14px;
  color: ${({ theme }) => theme.neutral["500"]};
`;

export default Experience;

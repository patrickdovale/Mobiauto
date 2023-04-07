import styled from "styled-components";

export const InfoPage = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  gap: 25px;
  flex-wrap: wrap;
  padding: 0 50px;

  @media screen and (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
    gap: 50px;
    padding: 0;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Details = styled.form`
  flex: 1;
  padding: 25px;
  background-color: lightsalmon;
  border-radius: 25px;
  max-height: 300px;
  overflow-y: auto;
  overflow-wrap: break-word;
  overflow-x: hidden;

  /* @media screen and (max-width: 800px) {
    width: 100%;
    overflow-wrap: break-word;
    overflow-x: hidden;
  } */
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const Cards = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    max-width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 168px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageCard = styled.img`
  width: 100%;
  height: 100%;
`;

export const BodyCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

export const LabelName = styled.h4`
  font-weight: bold;
  margin-bottom: 0px;
  color: #919191;
  margin-top: 8px;
`;

export const LabelGender = styled.label`
  font-weight: lighter;
  color: #bdbdbd;
  margin-top: 4px;
`;
export const LabelEspecie = styled.label`
  font-size: 10px;
  font-weight: lighter;
  color: #bdbdbd;
`;

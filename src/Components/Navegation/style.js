import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 0 50px;
  @media screen and (min-width: 1200px) {
    width: 1200px;
    padding: 0;
  }
`;

export const CardSection = styled.div`
  margin-bottom: 50px;
`;

export const TitleSection = styled.h1`
  font-size: 24px;
  color: #18191a;
  letter-spacing: 2px;
  font-weight: 300;
  border-bottom: 25px;
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

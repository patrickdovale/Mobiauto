import styled from "styled-components";

export const Page = styled.div`
  background-color: #f9f6fc;
  min-width: 100vw;
  min-height: 100vh;
`;

export const InfoPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  color: #424242;

  h2,
  h4 {
    margin: 0;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
  }
`;

export const Price = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  background-color: #00a38c;
  padding: 16px;
  border-radius: 50px;
  display: inline-block;
`;

export const Description = styled.h5`
  color: #9ea9b5;
`;

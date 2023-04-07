import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 25px 50px;
  margin: 0 auto;
  @media screen and (min-width: 1200px) {
    width: 1200px;
    padding: 25px 0px;
  }

  span {
    cursor: pointer;
    color: #f95a4a;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

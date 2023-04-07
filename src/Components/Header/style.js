import styled from "styled-components";

export const TotalSection = styled.section`
  width: 100%;
  background-color: #dcdcdc;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 20px 50px;
  margin-bottom: 25px;

  @media screen and (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
  }
`;

export const Logo = styled.h1`
  font-size: 25px;
  font-weight: 600;
  text-transform: capitalize;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Description = styled.div`
  font-size: 18px;
  font-weight: lighter;
  color: #959595;
`;

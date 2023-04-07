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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  flex: 1;
  background: rgb(255, 255, 255);
  padding: 48px;
  box-shadow: rgba(0, 0, 0, 0.41) 0px 2px;
`;


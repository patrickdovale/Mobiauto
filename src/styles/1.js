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

export const Form = styled.form`
  flex: 1;
`;

export const Details = styled.div`
  flex: 1;
  padding: 25px;
  background-color: lightsalmon;
  border-radius: 25px;
  max-height: 300px;
  overflow-y: auto;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
`;

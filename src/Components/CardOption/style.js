import styled from "styled-components";
import { DoubleArrow } from "@material-ui/icons";

export const Icon = styled.div`
  color: #000;
`;

export const Text = styled.span`
  text-align: left;
  text-decoration: none;
  transition: all 0.3s ease;
  line-height: 1;
  white-space: wrap;
  margin-top: 15px;

  strong {
    display: block;
  }
`;

export const Arrow = styled(DoubleArrow).attrs({
  size: "20px",
})`
  color: #f95a4a;
  position: absolute;
  right: 15px;
  bottom: 10px;
  transition: all 0.5s ease;
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  min-width: 160px;
  min-height: 90px;
  padding: 0 10px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  transition: all 0.3s ease;
  background-size: 150%;
  background-position: 100% 100%;
  background-color: #dcdcdc;
  border-radius: 5px;

  svg:not(${Arrow}) {
    width: 25px;
    height: 25px;
  }

  &:hover {
    cursor: pointer;
    background-position: 0 0;

    background-color: rgba(0, 0, 0, 0.3);

    ${Arrow} {
      transform: translateX(5px);
    }
  }
`;

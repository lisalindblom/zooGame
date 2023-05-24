import styled from "styled-components";
import { Shake } from "./Animations";

export const WaterButton = styled.button`
  &:hover {
    transform: scale(1.1);
    animation: ${Shake};
    animation-iteration-count: 1;
  }
`;

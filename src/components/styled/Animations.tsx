import { keyframes } from "styled-components";

export const Shake = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(10deg); }
  20% { transform: rotate(0eg); }
  30% { transform: rotate(-10deg); }
  40% { transform: rotate(0deg); }
  50% { transform: rotate(20deg); }
  60% { transform: rotate(5deg); }
  70% { transform: rotate(-5eg); }
  80% { transform: rotate(0deg); }
  90% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`;

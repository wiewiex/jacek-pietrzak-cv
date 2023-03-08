import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
  }
  10% {
    visibility: visible;
    opacity: 0;
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
`;

export const fadeInLeft = keyframes`
  10% {
      transform: translateX(-1000px);
      visibility: hidden;
      opacity: 0;
  }
  50% {
      visibility: visible;
      opacity: 0;
  }
  100% {
     transform: translateX(0);
     visibility: visible;
     opacity: 1;
  }
`;

export const fadeInRight = keyframes`
  10% {
      transform: translateX(1000px);
      visibility: hidden;
      opacity: 0;
  }
  50% {
      visibility: visible;
      opacity: 0;
  }
  100% {
     transform: translateX(0);
     visibility: visible;
     opacity: 1;
  }
`;

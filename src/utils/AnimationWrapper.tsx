import styled, { Keyframes } from 'styled-components';

interface IAnimationWrapper {
  keyframe: Keyframes;
  duration: number;
  delay?: number;
}

const AnimationWrapper = styled.div<IAnimationWrapper>`
  animation: ${(props) => props.keyframe} ${(props) => props.duration}s;
  animation-fill-mode: forwards;
  animation-delay: ${(props) => props.delay};
`;

export default AnimationWrapper;

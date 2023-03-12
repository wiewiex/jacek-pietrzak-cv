import {
  SingleTechnologyContainer,
  LevelBar,
  SingleLevel,
  IconContainer,
} from '../views/styledContainers';
import { ISingleTechnology } from '../../../data/types';
import { SingleTechText } from '../views/styledTexts';
import Image from 'next/image';

export default function SingleTechnology({
  icon,
  name,
  level,
}: ISingleTechnology) {
  let isActive = {
    l1: level === 1 || level === 2 || level === 3 ? true : false,
    l2: level === 2 || 3 ? true : false,
    l3: level === 3 ? true : false,
  };
  return (
    <SingleTechnologyContainer>
      <IconContainer>
        <Image src={icon} width={30} height={30} alt={name + ' icon'} />
      </IconContainer>
      <LevelBar>
        <SingleTechText>{name}</SingleTechText>
        <SingleLevel active={isActive.l1} />
        <SingleLevel active={isActive.l2} />
        <SingleLevel active={isActive.l3} />
      </LevelBar>
    </SingleTechnologyContainer>
  );
}

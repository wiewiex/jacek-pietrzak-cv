import {
  IconContainer,
  SingleTechnologyContainer,
} from '../views/styledContainers';
import { ISingleTool } from '../../../data/types';
import Image from 'next/image';
import { H5 } from '../views/styledTexts';

export default function SingleTool({ icon, name }: ISingleTool) {
  return (
    <SingleTechnologyContainer>
      <IconContainer>
        <Image src={icon} width={30} height={30} alt={name + ' icon'} />
      </IconContainer>
      <H5>{name}</H5>
    </SingleTechnologyContainer>
  );
}

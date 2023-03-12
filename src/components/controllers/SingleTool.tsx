import {
  IconContainer,
  SingleTechnologyContainer,
} from '../views/styledContainers';
import { ISingleTool } from '../../../data/types';
import Image from 'next/image';
import { H5 } from '../views/styledTexts';
import colors from '@/utils/colors';

export default function SingleTool({ icon, name }: ISingleTool) {
  return (
    <SingleTechnologyContainer>
      <IconContainer>
        <Image src={icon} width={30} height={30} alt={name + ' icon'} />
      </IconContainer>
      <H5 color={colors.secondary}>{name}</H5>
    </SingleTechnologyContainer>
  );
}

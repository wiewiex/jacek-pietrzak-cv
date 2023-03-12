import { RotatedHeaderContainer } from '../views/styledContainers';
import { H1, H2 } from '../views/styledTexts';
import { IHeader } from '../../../data/types';

export default function RotatedHeader({ data }: { data: IHeader }) {
  const { fullName, role } = data;

  return (
    <RotatedHeaderContainer>
      <H1>{fullName}</H1>
      <H2>{role}</H2>
    </RotatedHeaderContainer>
  );
}

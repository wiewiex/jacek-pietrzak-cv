import { Column } from '../views/styledContainers';
import { H3, Text } from '../views/styledTexts';
import { IAboutMe } from '../../../data/types';

export default function AboutMe({ data }: { data: IAboutMe }) {
  return (
    <Column margin="10px 0 0 0">
      <H3>{data.title}</H3>
      <Text>{data.description}</Text>
    </Column>
  );
}

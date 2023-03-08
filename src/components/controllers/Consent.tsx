import { ConsentContainer } from '../views/styledContainers';
import { Text } from '../views/styledTexts';

export default function Consent({ data }: { data: string }) {
  return (
    <ConsentContainer>
      <Text>{data}</Text>
    </ConsentContainer>
  );
}

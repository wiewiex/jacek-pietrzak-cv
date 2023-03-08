import Link from 'next/link';
import Image from 'next/image';
import { IconContainer } from '../views/styledContainers';
import { Text } from '../views/styledTexts';
import { SingleContactContainer } from '../views/styledContainers';

interface IContactLink {
  content: string;
  icon: string;
  link: string;
}

export default function SingleContactLink({
  content,
  icon,
  link,
}: IContactLink) {
  return (
    <SingleContactContainer>
      <Link href={link}>
        <IconContainer>
          <Image src={icon} width={30} height={30} alt="contact link icon" />
        </IconContainer>
        <Text>{content}</Text>
      </Link>
    </SingleContactContainer>
  );
}

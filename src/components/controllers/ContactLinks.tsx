import { ContactLinksContainer } from '../views/styledContainers';
import SingleContactLink from './SingleContactLink';
import { IContactLink } from '../../../data/types';

export default function ContactLinks({ data }: { data: IContactLink[] }) {
  return (
    <ContactLinksContainer>
      {data.map((el, i) => {
        return (
          <SingleContactLink
            key={i}
            icon={el.icon}
            link={el.link}
            content={el.text}
          />
        );
      })}
    </ContactLinksContainer>
  );
}

import Image from 'next/image';
import { IMainSection } from '../../../data/types';
import {
  ContactLinksAndAboutContainer,
  MainSectionContainer,
  ProfilePhotoContainer,
  ProfileSectionContainer,
} from '../views/styledContainers';
import AboutMe from './AboutMe';
import ContactLinks from './ContactLinks';
import RotatedHeader from './RotatedHeader';
import Technologies from './Technologies';

export default function MainSection({ data }: { data: IMainSection }) {
  return (
    <MainSectionContainer>
      <RotatedHeader data={data.header} />
      <ProfileSectionContainer>
        <ProfilePhotoContainer>
          <Image
            src={data.profileSection.photoUrl}
            width={200}
            height={200}
            alt="profile photo"
          />
        </ProfilePhotoContainer>
        <ContactLinksAndAboutContainer>
          <ContactLinks data={data.profileSection.contactLinks} />
          <AboutMe data={data.profileSection.aboutMe} />
        </ContactLinksAndAboutContainer>
      </ProfileSectionContainer>
      <Technologies data={data.technologies} />
    </MainSectionContainer>
  );
}

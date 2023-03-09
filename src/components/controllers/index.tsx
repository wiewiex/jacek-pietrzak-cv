import data from '../../../data/index';
import colors from '@/utils/colors';
import { fadeIn, fadeInLeft, fadeInRight } from '@/utils/keyframes';
import AnimationWrapper from '@/utils/AnimationWrapper';
import {
  PageContainer,
  MainContainer,
  Column,
} from '../views/styledContainers';
import MainSection from './MainSection';
import Experience from './Experience';
import Consent from './Consent';
import Education from './Education';

export default function Home() {
  return (
    <MainContainer backgroundColor={colors.primary} color={colors.secondary}>
      <AnimationWrapper duration={2} keyframe={fadeIn}>
        <PageContainer>
          <MainSection data={data.mainSection} />
          <Experience data={data.experience} toEntry={3} showTitle />
        </PageContainer>
      </AnimationWrapper>
      <PageContainer justifyContent="space-between">
        <Column>
          <Experience data={data.experience} fromEntry={3} />
          <Education data={data.education} />
        </Column>
        <Consent data={data.consent} />
      </PageContainer>
    </MainContainer>
  );
}

import styled from 'styled-components';
import mediaQueries from '@/utils/mediaQueries';
import colors from '@/utils/colors';

export const MainContainer = styled.main<{
  backgroundColor: string;
  color: string;
}>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => (props.color ? props.color : colors.secondary)};
`;

export const PageContainer = styled.div<{ justifyContent?: string }>`
  //pdf sizes
  width: 796px;
  height: 1123px;
  padding: 20px 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  @media ${mediaQueries.mobile} {
    width: 100%;
    height: 100%;
    padding: 20px;
  }
`;

export const MainSectionContainer = styled.section`
  position: relative;
  width: 100%;
  padding-left: 80px;
  @media ${mediaQueries.mobile} {
    width: 100%;
    padding: 0;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const RotatedHeaderContainer = styled.header`
  transform: rotate(-90deg);
  position: absolute;
  top: 175px;
  left: -180px;
  z-index: 0;

  @media ${mediaQueries.mobile} {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProfileSectionContainer = styled.section`
  display: flex;
  margin-bottom: 30px;

  @media ${mediaQueries.mobile} {
    position: relative;
    > div:last-of-type {
      > section {
        flex-direction: column;
        flex-wrap: nowrap;
      }
    }
  }
`;

export const ProfilePhotoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  img {
    object-fit: cover;
    object-position: 70%;
  }

  @media ${mediaQueries.mobile} {
    position: absolute;
    right: 0;
    top: 25px;
    z-index: -1;
  }
`;

export const ContactLinksAndAboutContainer = styled.div`
  flex-grow: 1;
`;

export const ContactLinksContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 10px;
`;

export const SingleContactContainer = styled.div`
  padding: 5px 10px;
  a {
    display: flex;
    color: ${(props) => (props.color ? props.color : colors.secondary)};
    text-decoration: none;
    align-items: center;
  }
`;

export const IconContainer = styled.div`
  margin-right: 10px;
  width: 30px;
  img {
    object-fit: contain;
  }
`;

export const TechnologiesContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const SingleTechnologyContainer = styled.div`
  display: flex;
  border-radius: 2px;
  align-items: center;
  padding: 5px 0;
  width: 22%;
  max-width: 145px;
  @media ${mediaQueries.mobile} {
    width: 45%;
  }
`;

export const LevelBar = styled.div`
  display: flex;
  border: 1px ridge white;
  position: relative;
  width: 70%;
`;

export const SingleLevel = styled.div<{ active: boolean }>`
  min-height: 24px;
  flex-grow: 1;
  background-color: ${(props) => (props.active ? 'white' : 'transparent')};
`;

export const ConsentContainer = styled.section`
  font-size: 10px;
  text-align: justify;
  padding: 7px 0;
  border-top: 1px groove white;
  margin-top: 40px;
`;

export const Column = styled.div<{ margin?: string }>`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: ${(props) => (props.margin ? props.margin : 0)};
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  @media ${mediaQueries.mobile} {
    flex-wrap: wrap;
  }
`;

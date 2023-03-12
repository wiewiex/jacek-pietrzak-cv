import styled from 'styled-components';
import mediaQueries from '@/utils/mediaQueries';

export const Text = styled.p<{ width?: string }>`
  font-size: 13px;
  font-family: ${(props) => props.theme.fonts.primary};
  text-align: justify;
  width: ${(props) => (props.width ? props.width : 'auto')};
  @media ${mediaQueries.mobile} {
    width: 100%;
    padding-top: 7px;
  }
`;

export const H1 = styled.h1`
  font-size: 35px;
  font-family: ${(props) => props.theme.fonts.secondary};
  color: ${(props) => props.theme.colors.secondary};
`;

export const H2 = styled.h2`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.secondary};
  @media ${mediaQueries.mobile} {
    padding: 20px 0;
  }
`;

export const H3 = styled.h3`
  font-size: 18px;
  padding-bottom: 10px;
  font-weight: 200;
  font-family: ${(props) => props.theme.fonts.secondary};
  color: ${(props) => props.theme.colors.secondary};
`;

export const H4 = styled.h3<{ width?: string }>`
  font-size: 14px;
  font-weight: 600;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.secondary};
  width: ${(props) => (props.width ? props.width : 'auto')};
  @media ${mediaQueries.mobile} {
    width: 70%;
  }
`;

export const H5 = styled.h5`
  font-size: 12px;
  font-weight: 200;
  font-family: ${(props) => props.theme.fonts.secondary};
  color: ${(props) => props.theme.colors.secondary};
`;

export const H6 = styled.h6<{ width?: string }>`
  font-size: 13px;
  font-weight: 400;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.secondary};
  width: ${(props) => (props.width ? props.width : 'auto')};
  @media ${mediaQueries.mobile} {
    width: 30%;
  }
`;

export const SingleTechText = styled.h6`
  color: ${(props) => props.theme.colors.primary};
  font-size: 12px;
  font-family: ${(props) => props.theme.fonts.secondary};
  background-color: ${(props) => props.theme.colors.secondary};
  position: absolute;
  left: 2px;
  padding: 0 1px;
  top: 0;
  display: flex;
  align-items: center;
  border-radius: 2px;
`;

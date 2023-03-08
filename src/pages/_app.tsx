import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import fonts from '@/utils/fonts';
import dynamic from 'next/dynamic';
const GoogleFontLoader = dynamic(() => import('react-google-font-loader'), {
  ssr: false,
});

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

interface ThemeInterface {
  colors: {
    primary: string;
  };
}

const theme: ThemeInterface = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <GoogleFontLoader
        fonts={Object.values(fonts)}
        subsets={['cyrillic-ext', 'greek']}
      />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

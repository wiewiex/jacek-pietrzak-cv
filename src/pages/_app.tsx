import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider, css } from 'styled-components';

const fonts = css`
  @import url('https://fonts.googleapis.com/css2?family=Bungee+Outline&family=Cutive+Mono&family=Major+Mono+Display&display=swap');
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ${fonts}
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
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

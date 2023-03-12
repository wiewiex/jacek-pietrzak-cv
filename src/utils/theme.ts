interface ThemeInterface {
  colors: {
    primary: string;
    secondary: string;
  };
  fonts: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

const theme: ThemeInterface = {
  colors: {
    primary: '#011627',
    secondary: 'white',
  },
  fonts: {
    primary: 'Cutive Mono',
    secondary: 'Major Mono Display',
    tertiary: 'Bungee Outline',
  },
};

export default theme;

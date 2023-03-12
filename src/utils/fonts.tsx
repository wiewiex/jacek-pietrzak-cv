import Head from 'next/head';

export const FontLoader = () => {
  return (
    <Head>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Bungee+Outline&family=Cutive+Mono&family=Major+Mono+Display&display=swap');
      </style>
    </Head>
  );
};

const fonts = {
  primary: 'Cutive Mono',
  secondary: 'Major Mono Display',
  tertiary: 'Bungee Outline',
};

export default fonts;

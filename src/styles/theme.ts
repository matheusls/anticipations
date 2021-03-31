import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      medium: number;
      small: number;
    };
    colors: {
      black: string;
      blue: string;
      blueDark: string;
      blueLight: string;
      blueLighter: string;
      gray: string;
      grayDark: string;
      grayLight: string;
      red: string;
      white: string;
    };
    fontSizes: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
  }
}

const Theme: DefaultTheme = {
  breakpoints: {
    medium: 650,
    small: 475,
  },
  colors: {
    black: '#000',
    blue: '#5d9bec',
    blueDark: '#3d75bb',
    blueLight: '#66afe9',
    blueLighter: '#dde6e9',
    gray: '#cecece',
    grayDark: '#656565',
    grayLight: '#f2f2f2',
    red: '#f00',
    white: '#fff',
  },
  fontSizes: {
    xsmall: '0.688rem',
    small: '0.875rem',
    medium: '1rem',
    large: '1.2rem',
    xlarge: '1.5rem',
  },
};

export default Theme;

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    desktopBreakpoint: string;
    tabletBreakpoint: string;


    colors: {
      bgPrimary: string,
      bgSecondary: string,

      shapes: string,
      shapesDark: string,

      text: string,
      textDarker: string,

      logoColor: string,
      deleteColor: string,
      orangeLow: string,
    };
  }
}
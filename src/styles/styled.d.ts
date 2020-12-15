import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      white: string;
      primary: string;
      secundary: string;
      background: string;
      text: string;
      circle: string;
    }
  }
}
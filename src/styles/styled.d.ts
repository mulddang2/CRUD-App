import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    borderColor: string;
    buttonColor: string;
    iconBorderColor: string;
    iconColor: string;
    shadowColor: string;
    iconHoverBgColor: string;
    rotate: string;
  }
}

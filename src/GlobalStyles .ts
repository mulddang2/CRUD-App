import { createGlobalStyle } from 'styled-components';
import HelveticaLight from '../src/styles/fonts/Helvetica-Light.woff2';
import HelveticaBold from '../src/styles/fonts/Helvetica-Bold.woff2';
import Helvetica from '../src/styles/fonts/Helvetica.woff2';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
        font-family: "Helvetica";
        src: local("Helvetica"),
        url(${HelveticaLight}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
@font-face {
        font-family: "Helvetica";
        src: local("Helvetica"),
        url(${Helvetica}) format('woff2');
        font-weight: 400;
        font-style: normal;
    }
@font-face {
        font-family: "Helvetica";
        src: local("Helvetica"),
        url(${HelveticaBold}) format('woff2');
        font-weight: bold;
        font-style: normal;
    }

html, body {
  font-family: Helvetica, Sans-Serif;
  color: #404040;
  background-color: #fff;
}

button {
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  vertical-align: middle;
  text-align: center;
  border-radius: 4px;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;  
}

[type=text] {
  display: block;
  border: 1px solid #dedede;
  border-radius: 4px;
  padding: 0.75rem;
  outline: none;
  background: transparent;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  width: 100%;
  max-width: 100%;
  line-height: 1;
}
`;

export default GlobalStyles;

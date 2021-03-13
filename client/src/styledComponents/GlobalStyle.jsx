import { createGlobalStyle } from "styled-components";
import Avenir from "./fonts/Avenir.ttc";
import basictitlefont from "./fonts/basictitlefont.ttf";
import bebas from "./fonts/bebas.ttf";
import worksansLight from "./fonts/WorkSans-Light.ttf";
import worksansMedium from "./fonts/WorkSans-Medium.ttf";
import worksansRegular from "./fonts/WorkSans-Regular.ttf";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Avenir';
    src: url(${Avenir}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'basictitlefont';
    src: url(${basictitlefont}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'bebas';
    src: url(${bebas}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'worksansLight';
    src: url(${worksansLight}) format('truetype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'worksansMedium';
    src: url(${worksansMedium}) format('truetype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'worksansRegular';
    src: url(${worksansRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
}



html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  
}


h1 {
    font-family: 'Avenir';
}

h2 {
    font-family: 'basictitlefont';
}

h3 {
    font-family: 'bebas';
}

p {
font-family: 'worksansLight';
}



h4, h8 {
    font-family: 'worksansRegular';
}

h5, h6, h7 {
    font-family: 'worksansMedium';
}


`;

export default GlobalStyle;

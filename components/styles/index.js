import { darken, modularScale, stripUnit } from "polished";

import styled from "styled-components";

// export const base = "#313131";
// export const lightBase = "#D8C9C5";

export const base = "#131313";
export const lightBase = "#D8C9C5";

export const accent1 = "#ff3305";
export const accent2 = "#579552";
export const nuetral = "#6B4A5C";

export const linkColor = `${accent2}`;
export const linkHoverColor = darken(0.15, linkColor);

export const fontFamily = "Raleway";
export const headerFontFamily = "Sansita";

export const fontSizeBase = "16px";
export const fontLineHeightBase = "1.5";
export const headerLineHeightBase = "1.25";


export const h1Size = `${stripUnit(modularScale(5))}rem`;
export const h2Size = `${stripUnit(modularScale(4))}rem`;
export const h3Size = `${stripUnit(modularScale(3))}rem`;
export const h4Size = `${stripUnit(modularScale(2))}rem`;
export const h5Size = `${stripUnit(modularScale(1))}rem`;
export const h6Size = `${stripUnit(modularScale(0))}rem`;

export const bpSmall = "48em"; // 768px
export const bpMedium = "64em"; //1024px * 768px
export const bpLarge = "85.375em"; // 1366px * 768px
export const bpXlarge = "120em"; // 1920px * 1080px
export const bp4k = "160em"; //2560px * 1440px

export const mqXsmall = "(min-width: 300px)";
export const mqSmall = `(min-width: ${bpSmall})`;
export const mqMedium = `(min-width: ${bpMedium})`;
export const mqLarge = `(min-width: ${bpLarge})`;
export const mqXlarge = `(min-width: ${bpXlarge})`;
export const mqXxlarge = `(min-width: ${bp4k})`;
export const mqRetina =
  "(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)";

export const marginBase = "4%";

export const Layout = styled.main`
  background: ${base};
  height: 100%;
  margin: 0 3%;
  @media ${mqSmall} {
    margin: 0 6%;
  }
  @media ${mqMedium} {
    margin: 0 8%;
  }
  @media ${mqLarge} {
    margin: 0 12%;
  }
  @media ${mqXlarge} {
    margin: 0 16%;
  }
  @media ${mqXxlarge} {
    margin: 0 18%;
  }
`;

export const globalCss = `
  html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre,a, abbr, acronym, address, big, cite, code,del, dfn, em, img, ins, kbd, q, s, samp,small, strike, strong, sub, sup, tt, var,b, u, i, center,dl, dt, dd, ol, ul, li,fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td,article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,time, mark, audio, video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section{display:block;}body{line-height:1;}ol, ul{list-style:none;}blockquote, q{quotes:none;}blockquote:before, blockquote:after,q:before, q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}

  html {
    background-color: ${base}
  }

  p {
    color: ${lightBase};
    font-family: ${fontFamily};
    font-size: calc(${fontSizeBase} * 1.45);
    line-height: ${fontLineHeightBase * 1.2};
    margin: 0 2%;
    @media ${mqMedium} {
      font-size: calc(${fontSizeBase} * 1);
      line-height: calc(${fontLineHeightBase} * 1.2);
    }
    @media ${mqLarge} {
      font-size: calc(${fontSizeBase} * 1.25);
    }
    @media ${mqXlarge} {
      font-size: calc(${fontSizeBase} * 1.35);
    }
    @media ${mqXxlarge} {
      font-size: calc(${fontSizeBase} * 1.45);
    }
  }

  a {
    color: ${linkColor};
    &:hover {
      color: ${linkHoverColor}
    }
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: ${headerFontFamily};
    font-weight: 900;
    font-style: italic;
    color: ${accent1};
    margin: ${marginBase} 0;
  }
  h1 {
    font-size: ${h1Size};
  }
  h2 {
    font-size: ${h1Size};
    @media ${mqMedium} {
      font-size: ${h2Size};
    }
    @media ${mqLarge} {
      font-size: ${h1Size};
    }
  }
  h3 {
    font-size: ${h3Size};
  }
  h4 {
    font-size: ${h4Size};
  }
  h5 {
    font-size: ${h5Size};
  }
  h6 {
    font-size: ${h6Size};
  }

  .sr-only:not(:focus):not(:active) {
    clip: rect(0 0 0 0); 
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap; 
    width: 1px;
  }
`;

/** THEME STYLES */

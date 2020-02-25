import styled from 'styled-components'
import { darken, modularScale, stripUnit } from 'polished'

export const base = '#0B0C0D';
export const step1 = '#0A0B0C';

// scale https://yeun.github.io/open-color/
export const  gray0 = '#f8f9fa';
export const  gray1 = '#f1f3f5';
export const  gray2 = '#e9ecef';
export const  gray3 = '#dee2e6';
export const  gray4 = '#ced4da';
export const  gray5 = '#adb5bd';
export const  gray6 = '#868e96';
export const  gray7 = '#495057';
export const  gray8 = '#343a40';
export const  gray9 = '#212529';

export const accent1 = '#ff3305';
export const accent2 = '#22b8cf';

export const linkColor         = `${accent2}`;
export const linkHoverColor = darken(.15, linkColor);

export const logoFontFamily = 'Modak';
export const fontFamily   = 'Raleway';
export const headerFontFamily   = 'Sansita';

export const fontSizeBase = '16px';
export const fontLineHeightBase = '1.5';
export const headerLineHeightBase = '1.25';

export const h1Size = `${ stripUnit(modularScale(5)) }rem`
export const h2Size = `${ stripUnit(modularScale(4)) }rem`
export const h3Size = `${ stripUnit(modularScale(3)) }rem`
export const h4Size = `${ stripUnit(modularScale(2)) }rem`
export const h5Size = `${ stripUnit(modularScale(1)) }rem`
export const h6Size = `${ stripUnit(modularScale(0)) }rem`

export const bpSmall = '48em'; // 768px
export const bpMedium = '64em'; //1024px * 768px
export const bpLarge = '85.375em'; // 1366px * 768px
export const bpXlarge = '120em'; // 1920px * 1080px
export const bp4k = '160em' //2560px * 1440px

export const mqXsmall = '(min-width: 300px)';
export const mqSmall = `(min-width: ${bpSmall})`;
export const mqMedium = `(min-width: ${bpMedium})`;
export const mqLarge = `(min-width: ${bpLarge})`;
export const mqXlarge = `(min-width: ${bpXlarge})`;
export const mqXxlarge = `(min-width: ${bp4k})`;
export const mqRetina = '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)';

export const marginBase = '4%'

export const Layout = styled.div`
  height: 100%;
  margin: 0 2%;
  @media ${mqSmall} {
    margin: 0 4%;
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

const globalStyle = `
  body {
    background-color: ${base};
    color: ${gray0};
  }

  p {
    font-family: ${fontFamily};
    font-size: ${fontSizeBase};
    line-height: ${fontLineHeightBase};
    @media ${mqMedium} {
      font-size: calc(${fontSizeBase} * 1.2);
      line-height: calc(${fontLineHeightBase} * 1.2);
    }
    @media ${mqLarge} {
      font-size: calc(${fontSizeBase} * 1.3);
    }
    @media ${mqXlarge} {
      font-size: calc(${fontSizeBase} * 1.4);
    }
    @media ${mqXxlarge} {
      font-size: calc(${fontSizeBase} * 1.6);
    }
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: ${headerFontFamily};
    color: ${accent1};
    margin: ${marginBase} 0;
  }
  h1 {
    font-size: ${h1Size};
    @media ${mqMedium} {
    }
  }
  h2 {
    font-size: ${h2Size};
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
`;

export default globalStyle;


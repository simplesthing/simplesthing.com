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

export const fontFamily   = `'Raleway', sans-serif`;
export const headerFontFamily   = `'Sansita', sans-serif`;
export const fontSizeBase = '16px';
export const marginBase = '24px'

export const h1Size = `${ stripUnit(modularScale(5)) }rem`
export const h2Size = `${ stripUnit(modularScale(4)) }rem`
export const h3Size = `${ stripUnit(modularScale(3)) }rem`
export const h4Size = `${ stripUnit(modularScale(2)) }rem`
export const h5Size = `${ stripUnit(modularScale(1)) }rem`
export const h6Size = `${ stripUnit(modularScale(0)) }rem`

export const Layout = styled.div`
  padding: ${marginBase};
display: flex;
`;

const globalStyle = `
  body {
    font-family: ${fontFamily};
    color: ${gray0};
    background-color: ${base};
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: ${headerFontFamily};
    color: ${accent1};
  }
  h1 {
    font-size: ${h1Size};
  }
`;

export default globalStyle;


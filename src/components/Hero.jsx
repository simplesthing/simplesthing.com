import React from 'react';
import styled from 'styled-components';
import { marginBase } from '../Style'

const Wrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding-top: 100px;
`

const Grid = styled.div`
  display: grid;
  grid-gap: ${marginBase} ${marginBase};
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`

const Item = styled.div`
  background: red;
`

export const Hero = () => (
<Wrapper>
<Grid>
<Item>item</Item>
<Item>item</Item>
<Item>item</Item>
</Grid>
</Wrapper>
)
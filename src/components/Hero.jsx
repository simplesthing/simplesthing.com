import React from 'react';
import styled from 'styled-components';
import { marginBase } from '../Style'

const Wrapper = styled.div`
  width: 70vw;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-gap: ${marginBase} ${marginBase};
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
`

const Item = styled.div`
  background: red;
`

export const Hero = () => (
<Wrapper>
  <h1>Work</h1>
  <Grid>
  <Item>item</Item>
  <Item>item</Item>
  <Item>item</Item>
  </Grid>
  <h1>About</h1>
  <p>Over the past 13 years I have worked with many different application stacks, project management techniques, JavaScript frameworks, CSS processors and most importantly people. 
  Involvement in community and critically thinking of ways to improve how we work with one another is just as important to me as writing code. 
  Our understanding of ourselves affects our products and how we make them. 
  Inclusion of all personas and the practice of empathy leads the way to making better products and a better world. 
  My ideal work life includes thoughtful decisions being made on behalf of the end user, time to learn as well as time to share with others, the ability to fill 
  spaces in the product that are outside the normal purview of a job title and an equitable environment in which to contribute and be heard. As for a specific technology 
  or language I am primarily a JavaScript and UI/UX engineer, but I am always ready, willing and able to jump into any part of any code base and go at it to 
  make things happen. I’ve spent the last year working in C++ and WPF creating game client UI for Sansar  as well as learning the Sansar C# scripting API, 
  in the past I have worked with Node, Java, Perl, .NET, PHP and ActionScript/Flex applications. I am interested in learning other Virtual Reality frameworks like Unity and Unreal engine 
  and working with React Native for Windows to create a universal UI across mobile and desktop.</p>
  <h1>Contact</h1>
</Wrapper>
)
import React from 'react';
import styled from 'styled-components';
import { marginBase, Grid } from '../Style'

const Wrapper = styled.div`
  margin: 0 auto;
`

const Item = styled.div`
  position: relative;
  padding-top: 50%;
`
  
  const ImageBackground = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: ${props => props.background};
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
  max-height: 100%;
  max-width: 100%;
`

export const Hero = () => (
<Wrapper>
  <h1 style={{marginTop: '0px'}}>work</h1>
   <Grid>
    <Item>
     <ImageBackground background="url(https://simplesthings.s3-us-west-2.amazonaws.com/vr-panel.jpg)"/>
    </Item>
    <Item>
    <ImageBackground background="url(https://simplesthings.s3-us-west-2.amazonaws.com/sansar-home-2019-rebrand.jpg)"/>
    </Item>
    <Item>
      <ImageBackground background="url(https://simplesthings.s3-us-west-2.amazonaws.com/office+hours.jpg)"/>
    </Item>
    <Item>
      
    </Item>
  </Grid>
  <h1>about</h1>
  <p>Over the years I have worked with different application stacks, project management techniques, JavaScript frameworks, CSS processors and most importantly people. 
  Involvement in community and critically thinking of ways to improve how we work with one another is just as important to me as writing code. 
  Our understanding of ourselves affects our products and how we make them. 
  Inclusion of all personas and the practice of empathy leads the way to making better products and a better world. 
  My ideal work life includes thoughtful decisions being made on behalf of the end user, time to learn as well as time to share with others, the ability to fill 
  spaces in the product that are outside the normal purview of a job title and an equitable environment in which to contribute and be heard. 
  I’ve spent the last year working fulltime in C++ and WPF while learning the Sansar C# scripting API in my freetime. 
  I have also worked professionally with with Node, Java, Perl, PHP and .NET web applications. 
  I am currently most interested in using React Native for Windows to create a universal UI framework for a brand across multiple platforms.</p>
  <h1>contact</h1>
</Wrapper>
)
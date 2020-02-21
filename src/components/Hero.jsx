import React from 'react';
import styled from 'styled-components';
import { h1Size, h2Size, h3Size, h4Size, accent1, mqXsmall, mqSmall, mqMedium, mqLarge, mqXlarge, mqXxlarge, fontFamily, marginBase } from '../Style'

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  display: block;
  height: 100%;
  h1 {
    font-size: ${h3Size};
    @media ${mqMedium} {
      font-size: ${h2Size};
    }
    @media ${mqLarge} {
      font-size: ${h1Size};
    }
  }
`

const Grid = styled.div`
  display: grid;
  min-width: 300px;
  grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
  @media ${mqSmall} {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
  @media ${mqMedium} {
    grid-template-columns: repeat(auto-fill, minmax(425px, 1fr));
  }
  @media ${mqLarge} {
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  }
  @media ${mqXlarge} {
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  }
`
  
const Item = styled.div`
  position: relative;
  padding-top: 200px;
  margin-bottom: 2%;
  &:nth-child(even) {
    margin-left: 1%;
  }
  &:nth-child(odd) {
    margin-right: 1%;
  }
  @media ${mqXsmall} {
    padding-top: 325px;
  }
  @media ${mqSmall} {
    padding-top: 255px;
  }
  @media ${mqMedium} {
    padding-top: 375px;
  }
  @media ${mqXlarge} {
    padding-top: 433px;
  }
`
  
const ImageBackground = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: ${props => props.background};
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  max-height: 100%;
  max-width: 100%;
  z-index: 1;
  &:nth-child(0) {
  }
`

const Overlay = styled.div`
bottom: 0px;
position: absolute;
text-align: center;
top: 0px;
width: 100%;
z-index: 2;
background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 1));
transition: all 2s ease 0s;
`

const Title = styled.h2`
  font-size: ${h4Size};
  font-family: ${fontFamily};
  font-weight: bold;
  color: #fff;
  position: absolute;
  bottom: 0;
  margin: 4%;
  span {
    font-size: .85rem;
  }
`

const Contacts = styled.ul`
  display: block;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  margin-left: -5px;
  margin-bottom: ${marginBase};
  li {
    display: inline-block;
    margin-right: 1%;
  }
`

const SocialLink = styled.a`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 100%;
  text-align: center;
  font-size: 20px;
  line-height: 45px;
  margin-top: 15px;
  font-size: 20px;
  color: #fff;
  background: 0 0;
  transition: all .3s ease-in-out;
  &:hover, &:focus, &:active, &:visited {
    border: solid 2px #fff;
    color: ${accent1};
    background: #fff;
  }
`


export const Hero = () => (
<Wrapper>
    <h1 style={{marginTop: '0px'}}>work</h1>
    <Grid>
      <Item>
      <ImageBackground background="url(https://simplesthings.s3-us-west-2.amazonaws.com/vr-panel.jpg)"/>
      <Overlay>
        <Title>Sansar Client
          <span> &nbsp; &nbsp;( C++, C#, XAML )</span>
        </Title>
      </Overlay>
      </Item>
      <Item>
      <ImageBackground background="url(https://simplesthings.s3-us-west-2.amazonaws.com/sansar-home-2019-rebrand.jpg)"/>
      <Overlay>
        <Title>Sansar Web
        <span> &nbsp; &nbsp;( ReactJS, NodeJS )</span>
        </Title>
      </Overlay>
      </Item>
      <Item>
        <ImageBackground background="url(https://simplesthings.s3-us-west-2.amazonaws.com/office+hours.jpg)"/>
        <Overlay>
        <Title>Scripting Office Hours
        <span> &nbsp; &nbsp;( C# )</span>
        </Title>
      </Overlay>
      </Item>
      <Item>
        <ImageBackground background="url(https://simplesthings.s3-us-west-2.amazonaws.com/SFJS.jpg)"/>
        <Overlay>
        <Title>Seattle Femninist JS
        <span> &nbsp; &nbsp;( JavaScript, ReactJS )</span>
        </Title>
      </Overlay>
      </Item>
      <Item>
        <ImageBackground background="url(https://simplesthings.s3-us-west-2.amazonaws.com/bootcamp.png)" />
        <Overlay>
        <Title>Career Bootcamp
        <span> &nbsp; &nbsp;( AngularJS, D3JS )</span>
        </Title>
      </Overlay>
      </Item>
      <Item>
        <ImageBackground background="url(https://simplesthings.s3-us-west-2.amazonaws.com/amazon.png)"/>
        <Overlay>
        <Title>Amazon
        <span> &nbsp; &nbsp;( HTML, CSS, JavaScript, Perl )</span>
        </Title>
      </Overlay>
      </Item>
      <Item>
        <ImageBackground background="url(https://simplesthings.s3-us-west-2.amazonaws.com/nordstrom.png)" />
        <Overlay>
        <Title>Nordstrom
        <span> &nbsp; &nbsp;( HTML, CSS, JavaScript, .NET, PHP)</span>
        </Title>
      </Overlay>
      </Item>
      <Item>
        <ImageBackground background="url(https://simplesthings.s3-us-west-2.amazonaws.com/disney-chat.png)"/>
        <Overlay>
        <Title>Disney
        <span> &nbsp; &nbsp;( HTML, CSS, JavaScript )</span>
        </Title>
      </Overlay>
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
  <Contacts>
    <li>
      <SocialLink href="//github.com/simplesthing" title="find me on github">
        <i class="fab fa-github"></i>
      </SocialLink>
    </li>
    <li>
      <SocialLink href="//www.linkedin.com/in/simplesthing" title="find me on linkedIn">
        <i class="fab fa-linkedin-in"></i>
      </SocialLink>
    </li>
    <li>
      <SocialLink href="//twitter.com/simplesthing" title="find me on twitter">
      <i class="fab fa-twitter"></i>
      </SocialLink>
    </li>
  </Contacts>
</Wrapper>
)
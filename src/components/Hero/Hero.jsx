import React from 'react';
import {
    Wrapper,
    Grid,
    Item,
    TextBg,
    Title,
    Contacts,
    SocialLink
} from './heroComponents'

export const Hero = () => (
<Wrapper>
    <h1 style={{marginTop: '0px'}}>work</h1>
    <Grid>
      <Item background="url(https://simplesthings.s3-us-west-2.amazonaws.com/vr-panel.jpg) center 10%">
        <TextBg>
            <Title>Sansar Client
                <span> &nbsp; &nbsp;( C++, C#, XAML )</span>
            </Title> 
        </TextBg>   
      </Item>
      <Item background="url(https://simplesthings.s3-us-west-2.amazonaws.com/sansar-home-2019-rebrand.jpg) left 27%">
        <TextBg>
            <Title>Sansar Web
                <span> &nbsp; &nbsp;( ReactJS, NodeJS )</span>
            </Title>
        </TextBg>
      </Item>
      <Item background="url(https://simplesthings.s3-us-west-2.amazonaws.com/office+hours.jpg) left 25%">
        <TextBg>
            <Title>Scripting Office Hours
                <span> &nbsp; &nbsp;( C# )</span>
            </Title>
        </TextBg>
      </Item>
      <Item background="url(https://simplesthings.s3-us-west-2.amazonaws.com/SFJS.jpg) center 25%">
        <TextBg>
            <Title>SFJS
                <span> &nbsp; &nbsp;( JavaScript, ReactJS )</span>
            </Title>
        </TextBg>
      </Item>
      <Item background="url(https://simplesthings.s3-us-west-2.amazonaws.com/bootcamp.png)">
        <TextBg>
            <Title>Career Bootcamp
                <span> &nbsp; &nbsp;( AngularJS, D3JS )</span>
            </Title>
        </TextBg>
      </Item>
      <Item background="url(https://simplesthings.s3-us-west-2.amazonaws.com/amazon.png)">
        <TextBg>
            <Title>Amazon
                <span> &nbsp; &nbsp;( HTML, CSS, JavaScript, Perl )</span>
            </Title>
        </TextBg>
      </Item>
      <Item background="url(https://simplesthings.s3-us-west-2.amazonaws.com/nordstrom.png)">
        <TextBg>
            <Title>Nordstrom
                <span> &nbsp; &nbsp;( HTML, CSS, JavaScript, .NET, PHP)</span>
            </Title>
        </TextBg>
      </Item>
      <Item background="url(https://simplesthings.s3-us-west-2.amazonaws.com/disney-chat.png)">
        <TextBg>
            <Title>Disney
                <span> &nbsp; &nbsp;( HTML, CSS, JavaScript )</span>
            </Title>
        </TextBg>
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
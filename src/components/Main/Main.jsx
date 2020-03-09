import React from 'react';
import {
    Wrapper,
    Contacts,
    SocialLink
} from './mainComponents'
import { Work } from './Work'

export const Main = () => (
<Wrapper>
    <h1 style={{marginTop: '1rem'}}>work</h1>
    <Work/>
    <h1>about</h1>
    <p>Over the years I have worked with different application stacks, project management techniques, JavaScript frameworks, CSS processors and most importantly people. 
    Involvement in community and critically thinking of ways to improve how we work with one another is just as important to me as writing code. 
    Our understanding of ourselves affects our products and how we make them. 
    Inclusion of all personas and the practice of empathy leads the way to making better products and a better world. 
    My ideal work life includes thoughtful decisions being made on behalf of the end user, time to learn as well as time to share with others, the ability to fill 
    spaces in the product that are outside the normal purview of a job title and an equitable environment in which to contribute and be heard. 
    I’ve spent the last year working fulltime in C++ and WPF while learning the Sansar C# scripting API in my freetime. 
    I am currently most interested in using React Native for Windows to build cross platform gaming UI.</p>
    <h1>contact</h1>
    <Contacts>
      <li>
        <SocialLink href="//github.com/simplesthing" title="find me on github">
          <i className="fab fa-github"></i>
        </SocialLink>
      </li>
      <li>
        <SocialLink href="//www.linkedin.com/in/simplesthing" title="find me on linkedIn">
          <i className="fab fa-linkedin-in"></i>
        </SocialLink>
      </li>
      <li>
        <SocialLink href="//twitter.com/simplesthing" title="find me on twitter">
        <i className="fab fa-twitter"></i>
        </SocialLink>
      </li>
    </Contacts>
</Wrapper>
)
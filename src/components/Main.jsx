import React from 'react';
import { Work } from './Work'
import { Contacts } from './Contacts'
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle'
import { ThemeConsumer } from '../contexts/theme'
import {
    accent1,
    accent2,
    base,
    h1Size, 
    h2Size, 
    h3Size,
    lightBase, 
    mqSmall, 
    mqMedium, 
    mqLarge
} from '../Style'


export const Wrapper = styled.div`
    position: relative;
    margin: 0 auto;
    display: block;
    height: 100%;
    width: 100%;
    p, h1 {
        margin-left: 4%;
        margin-right: 4%;
    }
    @media ${mqSmall} {
        p, h1 {
            margin-left: 2%;
            margin-right: 2%;
        }
    }
    @media ${mqMedium} {
        p, h1 {
            margin-left: 0;
            margin-right: 0;
        }
    }
`

const H1 = styled.h1`
    flex-grow: 1;
    display: inline-block;
    font-size: ${h3Size};
    color: ${props => props.theme === 'light' ? `${accent2}` : `${accent1}`};
    @media ${mqMedium} {
        font-size: ${h2Size};
    }
    @media ${mqLarge} {
        font-size: ${h1Size};
    }
`

const P = styled.p`
    color: ${props => props.theme === 'light' ? `${base}` : `${lightBase}`};
`


const FlexRow = styled.div`
    display: flex;
    flex-wrap: nowrap;
`

export const Main = () => (
<ThemeConsumer>
    {({theme}) => (
        <Wrapper>
        <FlexRow>
          <H1 style={{marginTop: '1rem'}} theme={theme}>work</H1>
          <ThemeToggle />
        </FlexRow>
        <Work/>
        <H1 theme={theme}>about</H1>
        <P theme={theme}>Over the years I have worked with different application stacks, project management techniques, JavaScript frameworks, CSS processors and most importantly people. 
        Involvement in community and critically thinking of ways to improve how we work with one another is just as important to me as writing code. 
        Our understanding of ourselves affects our products and how we make them. 
        Inclusion of all personas and the practice of empathy leads the way to making better products and a better world. 
        My ideal work life includes thoughtful decisions being made on behalf of the end user, time to learn as well as time to share with others, the ability to fill 
        spaces in the product that are outside the normal purview of a job title and an equitable environment in which to contribute and be heard. 
        I’ve spent the last year working fulltime in C++ and WPF while learning the Sansar C# scripting API in my freetime. 
        I am currently most interested in using React Native for Windows to build cross platform gaming UI.</P>
        <H1 theme={theme}>contact</H1>
        <Contacts />
    </Wrapper>
    )}
</ThemeConsumer>
)
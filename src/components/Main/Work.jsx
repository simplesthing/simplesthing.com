import React from 'react';
import {
    Grid,
    Item,
    TintedGlass,
    InfoContainer,
    InfoTitle,
    InfoIcons,
    Icon,
    Title,
} from './mainComponents'

const cSharp = {url: 'https://simplesthings.s3-us-west-2.amazonaws.com/c%23100x.png', title: 'C#'}
const cPp = {url: 'https://simplesthings.s3-us-west-2.amazonaws.com/C%2B%2Blogo100x.png', title: 'C++'}
const xaml = {url: 'https://simplesthings.s3-us-west-2.amazonaws.com/XAML-logo100x.png', title:'XAML'}
const aws = {url: 'https://simplesthings.s3-us-west-2.amazonaws.com/awsLogo100x.png', title:'AWS'}
const node = {url: 'https://simplesthings.s3-us-west-2.amazonaws.com/nodejs100x.png', title:'Node'}
const react = {url: 'https://simplesthings.s3-us-west-2.amazonaws.com/reactLogo100x.png', title: 'React'}
const styledComponents = {url:'https://simplesthings.s3-us-west-2.amazonaws.com/styled-component100x.png', title: 'Styled Components'}
const sansar = {url: 'https://simplesthings.s3-us-west-2.amazonaws.com/sansarLogo100X.png', title: 'Sansar'}
const github ={url:'https://simplesthings.s3-us-west-2.amazonaws.com/github100x.png', title:'GitHub'}
const webpack = {url: 'https://simplesthings.s3-us-west-2.amazonaws.com/webpack100x.png', title: 'Webpack'}
const angular = {url: 'https://simplesthings.s3-us-west-2.amazonaws.com/angularLogo100x.png', title:'Angular'}
const d3 = {url: 'https://simplesthings.s3-us-west-2.amazonaws.com/d3logo100x.png', title:'D3'}
const sass = {url: 'https://simplesthings.s3-us-west-2.amazonaws.com/sassLogo100x.png', title:'SASS'}
const gulp = {url: 'https://simplesthings.s3-us-west-2.amazonaws.com/gulpLogo100x.png', title: 'Gulp'}
const perl ={url: 'https://simplesthings.s3-us-west-2.amazonaws.com/perl100x.png', title:'Perl'}
const jquery = {url:'https://simplesthings.s3-us-west-2.amazonaws.com/jqueryLogo100x.png'}
const css = {url:'https://simplesthings.s3-us-west-2.amazonaws.com/css100x.png', title:'CSS'}
const php = {url: 'https://simplesthings.s3-us-west-2.amazonaws.com/phpLogo100x.png', title: 'PHP'}
const ember = {url:'https://simplesthings.s3-us-west-2.amazonaws.com/emberLogo100x.png', title: 'Ember'}
const xmpp = {url:'https://simplesthings.s3-us-west-2.amazonaws.com/xmpp100x.png', title:'XMPP'}
const html = {url:'https://simplesthings.s3-us-west-2.amazonaws.com/html100x.png', title:'HTML'}
const jsp = {url:'https://simplesthings.s3-us-west-2.amazonaws.com/jspLogo100x.png', title:'JSP'}
const flash = {url:'https://simplesthings.s3-us-west-2.amazonaws.com/flashLogo100x.png', title:'Flash'}

const items = [
    {
        title: 'Sansar Client',
        icons: [cSharp, cPp, xaml],
        background: 'url(https://simplesthings.s3-us-west-2.amazonaws.com/vr-panel.jpg) center 10%'
    },
    {
        title: 'Sansar Web',
        icons: [aws, node, react, styledComponents],
        background: 'url(https://simplesthings.s3-us-west-2.amazonaws.com/sansar-home-2019-rebrand.jpg) left center'
    },
    {
        title: 'Sansar Scripts',
        icons: [cSharp, sansar, github],
        background: 'url(https://simplesthings.s3-us-west-2.amazonaws.com/office+hours.jpg) left bottom'
    },
    {
        title: 'SFJS',
        icons: [react, webpack, github],
        background: 'url(https://simplesthings.s3-us-west-2.amazonaws.com/SFJS.jpg) center center'
    },
    {
        title: 'Apollo',
        icons: [angular, d3, sass, gulp],
        background: 'url(https://simplesthings.s3-us-west-2.amazonaws.com/bootcamp.png)'

    },
    {
        title: 'Amazon',
        icons: [perl, html, jquery, css, html],
        background: 'url(https://simplesthings.s3-us-west-2.amazonaws.com/amazon.png) left top'
    },
    {
        title: 'Nordstrom',
        icons: [php, jquery, html, css],
        background: 'url(https://simplesthings.s3-us-west-2.amazonaws.com/nordstrom.png)'
    },
    {
        title: 'Disney',
        icons: [ember, xmpp, css, html],
        background: 'url(https://simplesthings.s3-us-west-2.amazonaws.com/disney-chat.png)'
    },
    {
        title: 'Real Networks',
        icons: [jsp, jquery, flash],
        background: 'url(https://simplesthings.s3-us-west-2.amazonaws.com/superpass+screen.jpg) left top'

    }
]

export const Work = () => {
    return (
        <Grid>
            {items.map( item => (
                <Item backgroud={item.background} key={Math.random()}>
                    <TintedGlass>
                        <InfoContainer>
                            <InfoTitle>
                                <Title>{item.title}</Title>
                            </InfoTitle>
                            <InfoIcons>
                                {item.icons.map( icon =>(
                                    <Icon src={icon.url} title={icon.title} alt={icon.title} key={Math.random()} />
                                ))}
                            </InfoIcons>     
                        </InfoContainer>
                         
                    </TintedGlass>
                </Item>
            ))}
        </Grid>    
    )
}
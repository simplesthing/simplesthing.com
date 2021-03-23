import {
  base,
  fontFamily,
  h5Size,
  lightBase,
  mqLarge,
  mqMedium,
  mqSmall,
  mqXlarge,
  mqXsmall,
  mqXxlarge,
} from "../Style";

import React from "react";
import { ThemeConsumer } from "../contexts/theme";
import styled from "styled-components";
import Link from 'react-router-dom/Link';

const cSharp = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/c%23100x.png",
  title: "C#",
};
const cPp = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/C%2B%2Blogo100x.png",
  title: "C++",
};
const xaml = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/XAML-logo100x.png",
  title: "XAML",
};
const aws = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/awsLogo100x.png",
  title: "AWS",
};
const node = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/nodejs100x.png",
  title: "Node",
};
const react = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/reactLogo100x.png",
  title: "React",
};
const styledComponents = {
  url:
    "https://simplesthings.s3-us-west-2.amazonaws.com/styled-component100x.png",
  title: "Styled Components",
};
const sansar = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/sansarLogo100X.png",
  title: "Sansar",
};
const github = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/github100x.png",
  title: "GitHub",
};
const webpack = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/webpack100x.png",
  title: "Webpack",
};
const angular = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/angularLogo100x.png",
  title: "Angular",
};
const d3 = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/d3logo100x.png",
  title: "D3",
};
const sass = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/sassLogo100x.png",
  title: "SASS",
};
const gulp = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/gulpLogo100x.png",
  title: "Gulp",
};
const perl = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/perl100x.png",
  title: "Perl",
};
const jquery = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/jqueryLogo100x.png",
  title: "jQuery",
};
const css = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/css100x.png",
  title: "CSS",
};
const php = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/phpLogo100x.png",
  title: "PHP",
};
const ember = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/emberLogo100x.png",
  title: "Ember",
};
const xmpp = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/xmpp100x.png",
  title: "XMPP",
};
const html = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/html100x.png",
  title: "HTML",
};
const jsp = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/jspLogo100x.png",
  title: "JSP",
};
const flash = {
  url: "https://simplesthings.s3-us-west-2.amazonaws.com/flashLogo100x.png",
  title: "Flash",
};

const items = [
  {
    title: "Sansar Client",
    description:
      "Virtual reality menu tablet displaying avatar information for a player in Sansar.",
    icons: [cSharp, cPp, xaml],
    background:
      'url("https://simplesthings.s3-us-west-2.amazonaws.com/vr-panel.jpg") center 10%',
    path: '/sansar-client'
  },
  {
    title: "Sansar Web",
    description: "Screenshot of the homepage for sansar.com on July 2019.",
    icons: [aws, node, react, styledComponents],
    background:
      "url(https://simplesthings.s3-us-west-2.amazonaws.com/sansar-home-2019-rebrand.jpg) left center",
  },
  {
    title: "Sansar Scripts",
    description:
      "Image taken from video stream of Sansar Scripting Office Hours, and event to teach interactive scripting for the sansar game engine.",
    icons: [cSharp, sansar, github],
    background:
      "url(https://simplesthings.s3-us-west-2.amazonaws.com/office+hours.jpg) left bottom",
  },
  {
    title: "SFJS",
    description:
      "Logo for Seattle Feminist JS, a meetup group to teach JavaScript and specifically react.js to women for free.",
    icons: [react, webpack, github],
    background:
      "url(https://simplesthings.s3-us-west-2.amazonaws.com/SFJS.jpg) center center",
  },
  {
    title: "Apollo",
    description: "Screenshot of Career Bootcamp website.",
    icons: [angular, d3, sass, gulp],
    background:
      "url(https://simplesthings.s3-us-west-2.amazonaws.com/bootcamp.png)",
  },
  {
    title: "Amazon",
    description:
      "Screenshot of amazon.com homepage showing an interactive slideshow style widget in the top banner section, authored in 2013",
    icons: [perl, html, jquery, css, html],
    background:
      "url(https://simplesthings.s3-us-west-2.amazonaws.com/amazon.png) left top",
  },
  {
    title: "Nordstrom",
    description:
      "Screenshot of Nordstrom beauty blog that was launched in 2012 along with 3 other blogs.",
    icons: [php, jquery, html, css],
    background:
      "url(https://simplesthings.s3-us-west-2.amazonaws.com/nordstrom.png)",
  },
  {
    title: "Disney",
    description: "Screenshot of Disney chat widget on Disney website in 2011.",
    icons: [ember, xmpp, css, html],
    background:
      "url(https://simplesthings.s3-us-west-2.amazonaws.com/disney-chat.png)",
  },
  {
    title: "Real Networks",
    description:
      "Screenshot of Superpass live video streaming website made in 2010 by Real Networks and CBS for the reality TV show Big Brother.",
    icons: [jsp, jquery, flash],
    background:
      "url(https://simplesthings.s3-us-west-2.amazonaws.com/superpass+screen.jpg) left top",
  },
];

const Grid = styled.section`
  display: grid;
  margin-left: 1%;
  margin-right: 1%;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  @media ${mqXsmall} {
    margin-left: -1%;
    margin-right: -1%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  @media ${mqSmall} {
    grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
  }
  @media ${mqMedium} {
    grid-template-columns: repeat(auto-fill, minmax(333px, 1fr));
  }
  @media ${mqLarge} {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
  @media ${mqXlarge} {
    grid-template-columns: repeat(auto-fill, minmax(490px, 1fr));
  }
  @media ${mqXxlarge} {
    grid-template-columns: repeat(auto-fill, minmax(650px, 1fr));
  }
`;

const Item = styled.article`
  position: relative;
  height: 200px;
  background: ${(props) => props.background};
  background-size: cover;
  background-repeat: no-repeat;
  border: ${(props) =>
    props.theme === "light" ? `solid 2px ${base}` : `solid 2px ${lightBase}`};
  margin: 4% 3%;
  @media ${mqXsmall} {
    margin: 4%;
    height: 325px;
  }
  @media ${mqSmall} {
    height: 255px;
  }
  @media ${mqMedium} {
    margin: 2%;
    height: 375px;
  }
  @media ${mqXlarge} {
    height: 433px;
  }
`;

var lightGlass = ''

const TintedGlass = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20%;
  background: ${(props) =>
    props.theme === "light" ? "rgba(39, 54, 25, .7)" : "rgba(39, 54, 25, .7)"};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const InfoTitle = styled.div`
  flex: 0 1 auto;
  margin: 1rem 0 1rem 1rem;
  @media ${mqSmall} {
    margin-top: 1.1rem;
  }
  @media ${mqMedium} {
    margin-top: 1.25rem;
  }
  @media ${mqXlarge} {
    margin-top: 1.75rem;
  }
`;
const Title = styled.h3`
  display: inline;
  position: relative;
  font-size: ${h5Size};
  font-family: ${fontFamily};
  font-style: normal;
  color: #fff;
`;

const InfoIcons = styled.div`
  flex: 01 auto;
  text-align: right;
  margin-right: 1rem;
`;
const Icon = styled.img`
    position: relative;
    top: 1.1rem;
    margin-left:.5rem;
    width: 1.5rem;
    height: 1.5rem;
    @media ${mqSmall} {
        width: 2rem;
        height: 2rem;
        top: .75rem;
        height: 2rem;
    }
    @media ${mqMedium} {
        top: 1rem;
    }
    @media ${mqXlarge} {
        width: 2.5rem
        height: 2.5rem;
        top: 1.1rem;
    }
`;


export const Work = () => (
  <ThemeConsumer>
    {({ theme }) => (
      <Grid>
        {items.map((item) => {
          const Card = (
            <Item background={item.background} theme={theme} key={item.title}>
              <TintedGlass theme={theme}>
                  <InfoContainer>
                    <InfoTitle>
                      <Title>{item.title}</Title>
                    </InfoTitle>
                    <InfoIcons
                      role="list"
                      aria-label={`Languages used to code projects at ${item.title}`}
                      >
                      {item.icons.map((icon) => (
                        <Icon
                        src={icon.url}
                        title={icon.title}
                        alt={icon.title}
                        key={Math.random()}
                        role="listitem"
                        />
                        ))}
                    </InfoIcons>
                  </InfoContainer>
                </TintedGlass>
                <div
                  style={{ background: item.background }}
                  role="img"
                  aria-label={item.description}
                  ></div>
            </Item>)
          return item.path ? (<Link to={item.path} key={item.title}>{Card}</Link>) : Card
        }
        )}
      </Grid>
    )}
  </ThemeConsumer>
);

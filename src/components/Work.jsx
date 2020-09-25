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
    icons: [cSharp, cPp, xaml],
    background:
      'url("https://simplesthings.s3-us-west-2.amazonaws.com/vr-panel.jpg") center 10%',
  },
  {
    title: "Sansar Web",
    icons: [aws, node, react, styledComponents],
    background:
      "url(https://simplesthings.s3-us-west-2.amazonaws.com/sansar-home-2019-rebrand.jpg) left center",
  },
  {
    title: "Sansar Scripts",
    icons: [cSharp, sansar, github],
    background:
      "url(https://simplesthings.s3-us-west-2.amazonaws.com/office+hours.jpg) left bottom",
  },
  {
    title: "SFJS",
    icons: [react, webpack, github],
    background:
      "url(https://simplesthings.s3-us-west-2.amazonaws.com/SFJS.jpg) center center",
  },
  {
    title: "Apollo",
    icons: [angular, d3, sass, gulp],
    background:
      "url(https://simplesthings.s3-us-west-2.amazonaws.com/bootcamp.png)",
  },
  {
    title: "Amazon",
    icons: [perl, html, jquery, css, html],
    background:
      "url(https://simplesthings.s3-us-west-2.amazonaws.com/amazon.png) left top",
  },
  {
    title: "Nordstrom",
    icons: [php, jquery, html, css],
    background:
      "url(https://simplesthings.s3-us-west-2.amazonaws.com/nordstrom.png)",
  },
  {
    title: "Disney",
    icons: [ember, xmpp, css, html],
    background:
      "url(https://simplesthings.s3-us-west-2.amazonaws.com/disney-chat.png)",
  },
  {
    title: "Real Networks",
    icons: [jsp, jquery, flash],
    background:
      "url(https://simplesthings.s3-us-west-2.amazonaws.com/superpass+screen.jpg) left top",
  },
];

const Grid = styled.div`
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

const Item = styled.div`
  position: relative;
  height: 200px;
  background: ${(props) => props.background};
  background-size: cover;
  background-repeat: no-repeat;
  border: ${(props) =>
    props.theme === "light" ? `solid 4px ${base}` : `solid 4px ${lightBase}`};
  border-radius: 20px;
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

const TintedGlass = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20%;
  background: ${(props) =>
    props.theme === "light" ? "rgba(145, 10, 145, .8)" : "rgba(42, 0, 42, .8)"};
  border-radius: 0px 0px 16px 16px;
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
const Title = styled.h2`
  display: inline;
  position: relative;
  font-size: ${h5Size};
  font-family: ${fontFamily};
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
        {items.map((item) => (
          <Item background={item.background} key={Math.random()} theme={theme}>
            <div style={{ background: item.background }}></div>
            <TintedGlass theme={theme}>
              <InfoContainer>
                <InfoTitle>
                  <Title>{item.title}</Title>
                </InfoTitle>
                <InfoIcons>
                  {item.icons.map((icon) => (
                    <Icon
                      src={icon.url}
                      title={icon.title}
                      alt={icon.title}
                      key={Math.random()}
                    />
                  ))}
                </InfoIcons>
              </InfoContainer>
            </TintedGlass>
          </Item>
        ))}
      </Grid>
    )}
  </ThemeConsumer>
);

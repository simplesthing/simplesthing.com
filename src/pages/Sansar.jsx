import React from 'react';
import styled from "styled-components";
import useWindowSize from '../hooks/useWindowSize'
import {
    Layout,
    accent1,
    accent2,
    base,
    h1Size,
    h2Size,
    h3Size,
    h4Size,
    lightBase,
    mqLarge,
    mqMedium,
    mqSmall,
    mqXsmall,
    mqXlarge,
    mqXxlarge,
    fontFamily
  } from "../Style";


const H2 = styled.h2`
  flex-grow: 1;
  display: inline-block;
  font-size: ${h3Size};
  color: ${(props) => (props.theme === "light" ? `${accent2}` : `${accent1}`)};
  @media ${mqMedium} {
    font-size: ${h2Size};
  }
  @media ${mqLarge} {
    font-size: ${h1Size};
  }
`;

const H3 = styled.h3`
    flex-grow: 1;
    display: inline-block;
    font-size: ${h4Size};
    font-family: ${fontFamily};
    color: ${(props) => (props.theme === "light" ? `${accent1}` : `${accent2}`)};
    @media ${mqMedium} {
        font-size: ${h3Size};
    }
    @media ${mqLarge} {
        font-size: ${h2Size};
    }
`

const P = styled.p`
  color: ${lightBase};
`;

const Section = styled.div`
    margin-top: 1.5rem;
`
const Spread = styled.section`
    display: flex;
    justify-content: space-between;
`;

const Centered = styled.section`
    display: flex;
    justify-content: center;
`

const PaddedImg = styled.img`
    padding: 0 1rem;
`


const Sansar = () => {
    const {width, height} = useWindowSize();
    const pWidth = width > 600 ? 560 : 320;
    const pHeight = width > 600 ? 315 : 180;
    const imgPath = 'https://simplesthings.s3-us-west-2.amazonaws.com/sansar/';
    const imgWidth = (width/6) > 280 ? 280 : width/6
        
    return (
        <Layout>
            <h1 className="sr-only">Sansar user interface</h1>
            <H2>Sansar</H2>
            <P>Client UI built using a custom C++ implementation of XAML called Noesis Engine. Every interaction and rendering effect had to be added manually, there was nothing "out of the box" until we made it that way.</P>
            <section>
                <H3>Social</H3>
                <P>Implementation of search for a friend to start a chat conversation and adding emoji support.</P>
                <iframe width={pWidth} height={pHeight} src="https://www.youtube-nocookie.com/embed/3n4i3Ivnoo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
            <Section>
                <P>Social VR prototype panels</P>
                <Spread>
                    <img src={`${imgPath}vr-prototype-dashboard.png`} width={imgWidth} alt="VR dashboard prototype" />
                    <img src={`${imgPath}vr-prototype-friends.png`} width={imgWidth} alt="VR friends profile screen"/>
                    <img src={`${imgPath}vr-prototype-chat.png`} width={imgWidth} alt="VR chat panel prototype"/>
                    <img src={`${imgPath}vr-prototype-messages.png`} width={imgWidth} alt="VR profile panel" />
                </Spread>
            </Section>
           <Section>
                <P>Implementation of Social VR prototype panels</P>
                <PaddedImg src={`${imgPath}vr-wand.png`} width={imgWidth} alt="VR hands trying to grasp a 3D panel" />
                <PaddedImg src={`${imgPath}vr-wand-1.png`} width={imgWidth} alt="VR hands trying to grasp a 3D panel"/>
           </Section>
            <Section>
                <P>Implementation Quest system</P>
                <iframe width={pWidth} height={pHeight}  src="https://www.youtube-nocookie.com/embed/w2-2Qmtmewk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               <Section>
                <P>Questing panels</P>
               <Spread>
                    <img src={`${imgPath}client-quest-v2.png`} width={imgWidth} height={imgWidth*1.8} alt="Sansar Quest instructions panel"/>
                    <img src={`${imgPath}client-quest-v2-2.png`} width={imgWidth} height={imgWidth*1.8} alt="Sansar Quest progress panel"/>
                    <img src={`${imgPath}client-quest-v3.png`} width={imgWidth} height={imgWidth*1.8} alt="Sansar Quest objectives panel"/>
                    <img src={`${imgPath}client-quest-rewards.png`} width={imgWidth} height={imgWidth*1.8} alt="Sansar Quest rewards panel"/>
                </Spread>
               </Section>
               <Section>
                <iframe width={pWidth} height={pHeight} src="https://www.youtube-nocookie.com/embed/Ow80IEhEgMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               </Section>
            </Section>
            <Section>
                <P>Implementation of notifications</P>
                <PaddedImg src={`${imgPath}client-notifications.png`} width={imgWidth} alt="Sansar in game notifications badges"/>
            </Section>
            <Section>
                <P>Implementation of People App linking to open Profile app</P>
                <iframe width={pWidth} height={pHeight}  src="https://www.youtube-nocookie.com/embed/SYb5-43qinU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </Section>
           <Section/>
        </Layout>
    )
}

export default Sansar;
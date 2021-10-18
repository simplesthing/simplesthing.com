import styled from "styled-components";
import useWindowSize from "../../hooks/use-window-size";
import Layout from "../../components/layout";
import { lightBase } from "../../components/styles/index";
import Image from "next/image";
import Head from "next/head";
import { DefaultMarginTop } from "../../components/styles/utilities";


const P = styled.p`
  color: ${lightBase};
`;

const Section = styled.div`
    margin-top: 1.5rem;
`;
const Spread = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const PaddedImg = styled.div`
    padding: 0 .5rem;
    margin: .5rem;
`;

const SansarMobile = () => {
    const { width } = useWindowSize();
    const pWidth = width > 600 ? 560 : 320;
    const pHeight = width > 600 ? 315 : 180;
    const imgPath = "/images/work/sansar/mobile/";
    const imgWidth = width ? (width / 2) > 280 ? 280 : width / 6 : 280;
    const imgHeight = width ? width / 4 : 100;

    return (
        <Layout>
            <Head>
                <title>sansar mobile | simplesthing</title>
            </Head>
            <h1> Sansar mobile</h1>
            <P>
                The Sansar mobile app is an extension of the Sansar virtual events platform, a destination for innovative live events on PC and VR.</P>

            <DefaultMarginTop />
            <P>In a short span of three months I rallied to design build and launch the Sansar mobile app with React Native.
                Working towards a concert date of July 4th weekend for the Glastonbury virtual Shangri - La festival, Lost Horizons.
                It was my first opportunity to lead a product vision from conception to release. It wasn&apos;t perfect but it shipped on time and everyone enjoyed the show!</P>
            <Section>
                <h2>Design</h2>
                <Spread>
                    <PaddedImg>
                        <Image src={`${imgPath}first-mockup.png`} width={pWidth} height={pHeight} alt="Simple Flow for app pages, login, list, video" />
                    </PaddedImg>
                    <PaddedImg>
                        <Image src={`${imgPath}first-mockup-cameras.png`} width={pWidth} height={pHeight} alt="Video player mockup" />
                    </PaddedImg>
                </Spread>
                <Spread>
                    <PaddedImg>
                        <Image src={`${imgPath}video_mockup.png`} width={pWidth} height={pHeight} alt="Video player mockups" />
                    </PaddedImg>
                    <PaddedImg>
                        <Image src={`${imgPath}video_mockup_chat.png`} width={pWidth} height={pHeight} alt="Vide player mockups with chat" />
                    </PaddedImg>
                </Spread>
            </Section>
            <Section>
                <h2>Launch</h2>
                <Spread>
                    <PaddedImg>
                        <Image src={`${imgPath}lost-horizons-stages.png`} width={pHeight / 1.5} height={pHeight * 3} alt="Lost Horizons stages page" />
                    </PaddedImg>
                    <div>
                        <PaddedImg>
                            <Image src={`${imgPath}ipad-screenshots.png`} width={pWidth} height={pHeight} alt="iPad screenshots" />
                        </PaddedImg>
                      <Spread>
                      <PaddedImg>
                            <Image src={`${imgPath}event-list.png`} width={pHeight / 1.5} height={pHeight} alt="Event list" />
                        </PaddedImg>
                        <PaddedImg>
                            <Image src={`${imgPath}app_side_nav.png`} width={pHeight / 1.5} height={pHeight} alt="App side navigation" />
                        </PaddedImg>
                      </Spread>
                    </div>
                    <div>
                        <PaddedImg>
                            <Image src={`${imgPath}login_landscape.png`} width={imgHeight} height={imgWidth / 1.5} alt="Simple Flow for app pages, login, list, video" />
                        </PaddedImg>
                        <PaddedImg>
                            <Image src={`${imgPath}live_cameras.png`} width={imgWidth} height={imgHeight * 1.5} alt="Video player mockup" />
                        </PaddedImg>
                    </div>
                </Spread>

                <a href="https://simplesthings.s3.us-west-2.amazonaws.com/2020-07-04+17-42-26.mp4">Lost Horizons recording from inside Sansar</a>
            </Section>
            <Section>
                <h2>Ticket sales</h2>
                <Spread>
                    <PaddedImg>
                        <Image src={`${imgPath}ticket_test.png`} width={pHeight} height={pWidth} alt="Video player mockups" />
                    </PaddedImg>
                    <PaddedImg>
                        <Image src={`${imgPath}ticket_sale.png`} width={pHeight} height={pWidth} alt="Vide player mockups with chat" />
                    </PaddedImg>
                </Spread>
            </Section>
            <Section>
                <h2>Live streams</h2>
                <Spread>
                    <PaddedImg>
                        <Image src={`${imgPath}live_event.png`} width={pWidth} height={pHeight} alt="Simple Flow for app pages, login, list, video" />
                    </PaddedImg>
                    <PaddedImg>
                        <Image src={`${imgPath}live_event_2.png`} width={pWidth} height={pHeight} alt="Video player mockup" />
                    </PaddedImg>
                </Spread>
                <Spread>
                    <PaddedImg>
                        <Image src={`${imgPath}live_event_3.png`} width={pWidth} height={pHeight} alt="Video player mockups" />
                    </PaddedImg>
                    <PaddedImg>
                        <Image src={`${imgPath}live_event_4.png`} width={pWidth} height={pHeight} alt="Vide player mockups with chat" />
                    </PaddedImg>
                </Spread>
            </Section>
           
        </Layout>
    );
};

export default SansarMobile;
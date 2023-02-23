import BackToHome from "../../components/back-to-home";
import { DefaultMarginTop } from "../../components/styles/utilities";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import styled from "styled-components";
import useWindowSize from "../../hooks/use-window-size";

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
            <BackToHome anchor="#sansar-mobile" />
            <h1> Sansar mobile</h1>
            <p>
                The Sansar mobile app is an extension of the Sansar virtual events platform, a destination for innovative live events on PC and VR.</p>

            <DefaultMarginTop />
            <p>In a short span of three months I rallied to design build and launch the Sansar mobile app with React Native.
                Working towards a concert date of July 4th weekend for the Glastonbury virtual Shangri - La festival, Lost Horizons.
                It was my first opportunity to lead a product vision from conception to release. It wasn&apos;t perfect but it shipped on time and everyone enjoyed the show!</p>
            <br />
            <p>What was it like inside Sansar you ask? Check out a bit of Fatboy Slim&apos; set (guess who I am)  -&gt; <a href="https://simplesthings.s3.us-west-2.amazonaws.com/2020-07-04+17-42-26.mp4" target="_blank" rel="noreferrer">Lost Horizon recording from inside Sansar</a></p>

            <Section>
                <h2>Design</h2>
                <Spread>
                    <PaddedImg>
                        <Image src={`${imgPath}first-mockup.jpg`} width={pWidth} height={pHeight} alt="Simple Flow for app pages, login, list, video" />
                    </PaddedImg>
                    <PaddedImg>
                        <Image src={`${imgPath}first-mockup-cameras.jpg`} width={pWidth} height={pHeight} alt="Video player mockup" />
                    </PaddedImg>
                </Spread>
                <Spread>
                    <PaddedImg>
                        <Image src={`${imgPath}video_mockup.jpg`} width={pWidth} height={pHeight} alt="Video player mockups" />
                    </PaddedImg>
                    <PaddedImg>
                        <Image src={`${imgPath}video_mockup_chat.jpg`} width={pWidth} height={pHeight} alt="Vide player mockups with chat" />
                    </PaddedImg>
                </Spread>
            </Section>
            <Section>
                <h2>Launch</h2>
                <Spread>
                    <PaddedImg>
                        <Image src={`${imgPath}lost-horizons-stages.jpg`} width={pHeight / 1.5} height={pHeight * 3} alt="Lost Horizons stages page" />
                    </PaddedImg>
                    <div>
                        <PaddedImg>
                            <Image src={`${imgPath}ipad-screenshots.jpg`} width={pWidth} height={pHeight} alt="iPad screenshots" />
                        </PaddedImg>
                        <Spread>
                            <PaddedImg>
                                <Image src={`${imgPath}event-list.jpg`} width={pHeight / 1.5} height={pHeight} alt="Event list" />
                            </PaddedImg>
                            <PaddedImg>
                                <Image src={`${imgPath}app_side_nav.jpg`} width={pHeight / 1.5} height={pHeight} alt="App side navigation" />
                            </PaddedImg>
                        </Spread>
                    </div>
                    <div>
                        <PaddedImg>
                            <Image src={`${imgPath}login_landscape.jpg`} width={imgHeight} height={imgWidth / 1.5} alt="Login screen" />
                        </PaddedImg>
                        <PaddedImg>
                            <Image src={`${imgPath}live_cameras.jpg`} width={imgWidth} height={imgHeight * 1.5} alt="Live cameras at event" />
                        </PaddedImg>
                    </div>
                </Spread>

            </Section>
            <Section>
                <h2>Ticket sales</h2>
                <Spread>
                    <PaddedImg>
                        <Image src={`${imgPath}ticket_test.jpg`} width={pHeight} height={pWidth} alt="Buy ticket and add to calendar features" />
                    </PaddedImg>
                    <PaddedImg>
                        <Image src={`${imgPath}ticket_sales.jpg`} width={pHeight} height={pWidth} alt="Successful ticket purchase screen" />
                    </PaddedImg>
                </Spread>
            </Section>
            <Section>
                <h2>Live streams</h2>
                <Spread>
                    <PaddedImg>
                        <Image src={`${imgPath}live_event.jpg`} width={pWidth} height={pHeight} alt="Simple Flow for app pages, login, list, video" />
                    </PaddedImg>
                    <PaddedImg>
                        <Image src={`${imgPath}live_event_2.jpg`} width={pWidth} height={pHeight} alt="Video player mockup" />
                    </PaddedImg>
                </Spread>
                <Spread>
                    <PaddedImg>
                        <Image src={`${imgPath}live_event_3.jpg`} width={pWidth} height={pHeight} alt="Video player mockups" />
                    </PaddedImg>
                    <PaddedImg>
                        <Image src={`${imgPath}live_event_4.jpg`} width={pWidth} height={pHeight} alt="Vide player mockups with chat" />
                    </PaddedImg>
                </Spread>
            </Section>
            <BackToHome anchor="#sansar-mobile" />
        </Layout>
    );
};

export default SansarMobile;
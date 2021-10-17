import styled from "styled-components";
import useWindowSize from "../../hooks/use-window-size";
import Layout from "../../components/layout";
import { lightBase } from "../../components/styles/index";
import Image from "next/image";
import Head from "next/head";

const P = styled.p`
  color: ${lightBase};
`;

const Section = styled.div`
    margin-top: 1.5rem;
`;
const Spread = styled.section`
    display: flex;
    justify-content: space-between;
`;

const PaddedImg = styled.img`
    padding: 0 1rem;
`;

const Sansar = () => {
    const { width } = useWindowSize();
    const pWidth = width > 600 ? 560 : 320;
    const pHeight = width > 600 ? 315 : 180;
    const imgPath = "https://simplesthings.s3-us-west-2.amazonaws.com/sansar/";
    const imgWidth = width ? (width / 6) > 280 ? 280 : width / 6 : 280;
    const imgHeight = imgWidth * 1.65;
    const imgHeight2 = imgWidth * 1.3;

    return (
        <Layout homeAnchor="#work">
            <Head>
                <title>sansar client | simplesthing</title>
            </Head>
            <h1 className="sr-only">Sansar user interface</h1>
            <h1> Sansar client</h1>
            <P>Client UI built using a custom C++ implementation of XAML called Noesis Engine. Every interaction and rendering effect had to be added manually, there was nothing &quot;out of the box&quot; until we made it that way.</P>

            <Section>
                <h2>Quest System</h2>
                <iframe width={pWidth} height={pHeight} src="https://www.youtube-nocookie.com/embed/w2-2Qmtmewk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <Section>
                    <Spread>
                        <Image src={`${imgPath}client-quest-v2.png`} width={imgWidth} height={imgHeight} alt="Sansar Quest instructions panel" />
                        <Image src={`${imgPath}client-quest-v2-2.png`} width={imgWidth} height={imgHeight} alt="Sansar Quest progress panel" />
                        <Image src={`${imgPath}client-quest-v3.png`} width={imgWidth} height={imgHeight} alt="Sansar Quest objectives panel" />
                        <Image src={`${imgPath}client-quest-rewards.png`} width={imgWidth} height={imgHeight} alt="Sansar Quest rewards panel" />
                    </Spread>
                </Section>
                <Section>
                    <iframe width={pWidth} height={pHeight} src="https://www.youtube-nocookie.com/embed/Ow80IEhEgMQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Section>
            </Section>
            <section>
                <h2>Social</h2>
                <P>Implementation of search for a friend to start a chat conversation and adding emoji support.</P>
                <iframe width={pWidth} height={pHeight} src="https://www.youtube-nocookie.com/embed/3n4i3Ivnoo4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </section>
            <Section>
                <Spread>
                    <Image src={`${imgPath}vr-prototype-dashboard.png`} width={imgWidth} height={imgHeight} alt="VR dashboard prototype" />
                    <Image src={`${imgPath}vr-prototype-friends.png`} width={imgWidth} height={imgHeight} alt="VR friends profile screen" />
                    <Image src={`${imgPath}vr-prototype-chat.png`} width={imgWidth} height={imgHeight} alt="VR chat panel prototype" />
                    <Image src={`${imgPath}vr-prototype-messages.png`} width={imgWidth} height={imgHeight} alt="VR profile panel" />
                </Spread>
            </Section>
            <Section>
                <h2>Vr</h2>
                <PaddedImg src={`${imgPath}vr-wand.png`} width={imgWidth} height={imgHeight2} alt="VR hands trying to grasp a 3D panel" />
                <PaddedImg src={`${imgPath}vr-wand-1.png`} width={imgWidth} height={imgHeight2} alt="VR hands trying to grasp a 3D panel" />
            </Section>
            <Section>
                <h2>Notifications</h2>
                <PaddedImg src={`${imgPath}client-notifications.png`} width={imgWidth} height={imgHeight2} alt="Sansar in game notifications badges" />
            </Section>
            <Section />
        </Layout>
    );
};

export default Sansar;
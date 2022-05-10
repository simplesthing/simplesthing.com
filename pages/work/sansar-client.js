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
    justify-content: space-between;
`;

const PaddedImg = styled(Image)`
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
        <Layout>
            <Head>
                <title>sansar client | simplesthing</title>
            </Head>
            <BackToHome anchor="#sansar" />
            <h1> Sansar client</h1>
            <p>Sansar PC game client UI built using a C++ implementation of XAML called Noesis Engine. Every interaction and rendering effect had to be added manually,
                there was nothing &quot;out of the box.&quot;</p>
            <DefaultMarginTop />
            <p>I spent a little over one year working in a completely different environment from JavaScript. With the right amount of hand holding and freedom
                I was able to transfer all of my experience building web applications to the game client. I introduced a more a modular style of coding to the UI code base,
                and started working on extending functionality with view properties and shared variables.
            </p>


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
            <Section>
                <h2>Social</h2>
                <iframe width={pWidth} height={pHeight} src="https://www.youtube-nocookie.com/embed/3n4i3Ivnoo4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Section>
            <Section>
                <Spread>
                    <Image src={`${imgPath}vr-prototype-dashboard.png`} width={imgWidth} height={imgHeight} alt="VR dashboard prototype" />
                    <Image src={`${imgPath}vr-prototype-friends.png`} width={imgWidth} height={imgHeight} alt="VR friends profile screen" />
                    <Image src={`${imgPath}vr-prototype-chat.png`} width={imgWidth} height={imgHeight} alt="VR chat panel prototype" />
                    <Image src={`${imgPath}vr-prototype-messages.png`} width={imgWidth} height={imgHeight} alt="VR profile panel" />
                </Spread>
            </Section>
            <Section>
                <h2>Marketplace</h2>
                <iframe width={pWidth} height={pHeight} src="https://www.youtube.com/embed/VQAbuIJW-kg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Section>
            <Section>
                <h2>Codex</h2>
                <iframe width={pWidth} height={pHeight} src="https://www.youtube.com/embed/DJSEqMVChdE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
            <BackToHome anchor="#sansar" />
        </Layout>
    );
};

export default Sansar;
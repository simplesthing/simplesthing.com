import { DefaultMarginTop } from "../../components/styles/utilities";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import { lightBase } from "../../components/styles/index";
import styled from "styled-components";
import useWindowSize from "../../hooks/use-window-size";

const P = styled.p`
  color: ${lightBase};
`;


const Real = () => {
    const { width } = useWindowSize();
    const imgPath = "/images/work/realnetworks/";
    const iWidth = width > 600 ? 650 : 325;
    const iHeight = width > 600 ? 303 : 150;

    const pWidth = width > 600 ? 400 : 200;
    const pHeight = width > 600 ? 533 : 267;

    const sWidth = width > 600 ? 760 : 380;
    const sHeight = width > 600 ? 514 : 257;

    return (
        <Layout>
            <Head>
                <title>real networks | simplesthing</title>
            </Head>
            <h1>Real Networks</h1>

            <P>
                My first web development role in Seattle.
                Originally hired as the sole frontend developer for real.com. I worked very closely with designers to revamp the company&apos;s image, give it as more modern look and feel.
            </P>
            <DefaultMarginTop />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image src={`${imgPath}real-march-2009.png`} width={pWidth} height={pHeight} alt="Real homepage 2009" /> &nbsp;&nbsp;
            </div>
            <DefaultMarginTop />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image src={`${imgPath}real-july-2010.png`} width={iWidth} height={iHeight} alt="Real homepage 2010" />&nbsp;&nbsp;
            </div>
            <DefaultMarginTop />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image src={`${imgPath}real-november-2010.png`} width={iWidth} height={iHeight} alt="Real homepage 2010" />
            </div>

            <h2>Superpass</h2>

            <P>After my first year I moved over to the Superpass team, a streaming channel inside the RealPlayer that broadcast the Live feeds for the reality show Big Brother ON CBS.
                At the time the RealPlayer was experiencing performance issues with the playback of pre-recorded streams and customers weren&apos;t very happy.
                I had a background in Flash  development and I proposed building a pre-recorded player using Flash and the web instead of the RealPlayer to overcome some of the issues.
                After presenting the prototype to the product owners Superpass began to move it&apos;s content off of Real Player and into Flash and Silverlight.
                I also re-skinned the site with updated modern designs.
            </P>
            <DefaultMarginTop />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image src={`${imgPath}superpass_in_realplayer.jpg`} width={400} height={286} alt="Superpass in RealPlayer" />&nbsp;&nbsp;
                <Image src={`${imgPath}superpass.jpg`} width={400} height={286} alt="Superpass redesign" />
            </div>
            <DefaultMarginTop />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image src={`${imgPath}big_brother_flash_player.png`} width={sWidth} height={sHeight} alt="Superpass Flash player" /> &nbsp;&nbsp;

            </div>
        </Layout>
    );
};

export default Real;

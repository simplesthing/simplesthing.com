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


const SansarWeb = () => {
    const { width } = useWindowSize();
    const imgPath = "/images/work/sansar/web/";
    const iWidth = width > 600 ? 650 : 325;
    const iHeight = width > 600 ? 725 : 337;

    const yWidth = width > 600 ? 400 : 200;
    const yHeight = width > 600 ? 531 : 265;

    const pWidth = width > 600 ? 650 : 325;
    const pHeight = width > 600 ? 542 : 271;

    const aWidth = width > 600 ? 650 : 325;
    const aHeight = width > 600 ? 386 : 143;

    const eWidth = width > 600 ? 650 : 325;
    const eHeight = width > 600 ? 444 : 222;

    const l1Width = width > 600 ? 650 : 325;
    const l1Height = width > 600 ? 1368 : 684;

    const l2Width = width > 600 ? 650 : 325;
    const l2Height = width > 600 ? 1780 : 890;

    return (
        <Layout>
            <Head>
                <title>sansar web | simplesthing</title>
            </Head>
            <h1>Sansar web</h1>

            <P>
                This was the very begining, before Sansar even had a name.
                I vetted and demonstrated React as a new frontend library that had signifigant advantages over Angular at the time. It was a solid choice agreed to by the
                rest of the web team. I implemented CSS modules and worked with the UX designer to create base theme variables and component styles.
                I must have re-skinned the sansar website, and all of it&apos;s many subdomains and landing pages about a hundred times before it&apos;s final iterations at Linden Lab.
            </P>
            <DefaultMarginTop />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image src={`${imgPath}homepage1.png`} width={pWidth} height={pHeight} alt="Sansar creator preview" /> &nbsp;&nbsp;
                <Image src={`${imgPath}creator-preview.png`} width={iWidth} height={iHeight} alt="Sansar creator preview signup form" />
            </div>
            <DefaultMarginTop />
            <P>

            </P>

            <h2>Atlas</h2>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image src={`${imgPath}experience-page.png`} width={eWidth} height={eHeight} alt="Sansar experience page 1" />
                <Image src={`${imgPath}experience1.png`} width={aWidth} height={aHeight} alt="Sansar experience page 2" />
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image src={`${imgPath}atlas.png`} width={eWidth} height={eHeight} alt="Sansar experience page 1" />
                <Image src={`${imgPath}atlas2.png`} width={eWidth} height={eHeight} alt="Sansar experience page 1" />

            </div>

            <Image src={`${imgPath}atlas3.png`} width={yWidth} height={yHeight} alt="Sansar experience page 1" />

            <h2>Store</h2>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image src={`${imgPath}store.jpg`} width={eWidth} height={eHeight} alt="Sansar store" /> &nbsp;&nbsp;
                <Image src={`${imgPath}store-inventory.png`} width={aWidth} height={aHeight} alt="Sansar inventory" />
            </div>

            <DefaultMarginTop />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image src={`${imgPath}store-2.png`} width={aWidth} height={aHeight} alt="Sansar store" /> &nbsp;&nbsp;
                <Image src={`${imgPath}edit-listing-error.png`} width={aWidth} height={aHeight} alt="Sansar edit listing" />
            </div>

            <h2>Profile</h2>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image src={`${imgPath}account2.jpg`} width={aWidth} height={aHeight} alt="Sansar store" /> &nbsp;&nbsp;
                <Image src={`${imgPath}friends.png`} width={aWidth} height={aHeight} alt="Sansar edit listing" />
            </div>

            <h2>Homepage</h2>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image src={`${imgPath}landing-v1.png`} width={l1Width} height={l1Height} alt="Sansar homepage" /> &nbsp;&nbsp;
                <Image src={`${imgPath}landing-4.jpg`} width={l2Width} height={l2Height} alt="Sansar homepage" />
            </div>

        </Layout>
    );
};

export default SansarWeb;
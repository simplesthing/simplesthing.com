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


const Nordstrom = () => {
    const { width } = useWindowSize();
    const imgPath = "/images/work/nordstrom/";


    const pWidth = width > 600 ? 650 : 325;
    const pHeight = width > 600 ? 554 : 277;

    return (
        <Layout>
            <Head>
                <title>nordstrom | simplesthing</title>
            </Head>
            <h1>Nordstrom</h1>

            <P>
                During my time at Nordstrom I built interactive widgets for the retail site as a main staple but I also got the opportunity  to work with the creative department, putting
                my WordPress theming skills to work. I themed their single blog at the time, The Thread, with the Thesis SEO theme and helped them launch four new blogs with using that same theme.
            </P>
            <DefaultMarginTop />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image src={`${imgPath}thread.png`} width={pWidth} height={pHeight} alt="The thread blog" /> &nbsp;&nbsp;
                <Image src={`${imgPath}men.png`} width={pWidth} height={pHeight} alt="Nordstrom mens blog" />
            </div>
            <DefaultMarginTop />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image src={`${imgPath}bp.png`} width={pWidth} height={pHeight} alt="The thread blog" /> &nbsp;&nbsp;
                <Image src={`${imgPath}wedding.png`} width={pWidth} height={pHeight} alt="Nordstrom mens blog" />
            </div>
            <DefaultMarginTop />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image src={`${imgPath}beauty.png`} width={pWidth} height={pHeight} alt="Nordstrom mens blog" />
            </div>

            <h2>Prototyping</h2>
            <P>Another large part of my job was building high fidelity prototypes for the UX team.
                The prototypes were then used during usability testing with actual customers.
                I learned a lot from the experience of watching the customers react to things like infinite scrolling and parallax scrolling.</P>
            <DefaultMarginTop />
            <Image src={`${imgPath}view-all.png`} width={pWidth} height={pHeight} alt="Nordstrom mens blog" />
        </Layout>
    );
};

export default Nordstrom;

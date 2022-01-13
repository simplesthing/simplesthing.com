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



const Apollo = () => {
    const { width } = useWindowSize();
    const imgPath = "/images/work/bootcamp/";

    const pWidth = width > 600 ? 650 : 325;
    const pHeight = width > 600 ? 500 : 264;

    return (
        <Layout>
            <Head>
                <title>apollo | simplesthing</title>
            </Head>
            <h1>Apollo Education Group</h1>

            <P>
                Large multi tenant single page web applications using Angular JS. The Bootcamp application incorporates professional development and job seeking skills into a highly visual and interactive journey of game like exercises.
            </P>

            <h2>Career Prep Bootcamp</h2>

            <video controls="controls" autoPlay="autoplay" poster={`${imgPath}homepage.files/html5video/homepage.jpg`} style={{ width: "100%" }} title="DNM-screencast2" loop="loop" >
                <source src={`${imgPath}homepage.files/html5video/homepage.m4v`} type="video/mp4" />
                <source src={`${imgPath}homepage.files/html5video/homepage.webm`} type="video/webm" />
                <source src={`${imgPath}homepage.files/html5video/homepage.webm`} type="video/ogg" />
                <source src={`${imgPath}homepage.files/html5video/homepage.mp4`} />
            </video>
            <DefaultMarginTop />

            <P>
                I was tasked with a design that was modeled after transitions in a video.
                When clciked a section of the screen would open up with a slight bit of parallax shifting of overlapping images.
                Performance and frame rate were the biggest challenges to achieve smooth transitions.
            </P>
            <DefaultMarginTop />
            <video controls="controls" autoPlay="autoplay" poster={`${imgPath}overview/screencast-overview-pages.jpg`} style={{ width: "100%" }} title="DNM-screencast2" loop="loop" >
                <source src={`${imgPath}overview/screencast-overview-pages.m4v`} type="video/mp4" />
                <source src={`${imgPath}overview/screencast-overview-pages.webm`} type="video/webm" />
                <source src={`${imgPath}overview/screencast-overview-pages.ogv`} type="video/ogg" />
                <source src={`${imgPath}overview/screencast-overview-pages.mp4`} />
            </video>

            <h2>Analytics dashboard</h2>

            <P>
                After the main bootcamp application was completed I built the frontend of a small analytics dashboard for colleges to gauge usage and student progress using Angular and D3 libraries.
            </P>
            <DefaultMarginTop />
            <Image src={`${imgPath}dashboard/overview.png`} width={pWidth} height={pHeight} alt="Porch mobile app" />
            <DefaultMarginTop />
            <Image src={`${imgPath}dashboard/dashboard.png`} width={pWidth} height={pHeight} alt="Porch mobile app" />

        </Layout>
    );
};

export default Apollo;

import { DefaultMarginTop } from "../../components/styles/utilities";
import Head from "next/head";
import Layout from "../../components/layout";
import { lightBase } from "../../components/styles/index";
import styled from "styled-components";

const P = styled.p`
  color: ${lightBase};
`;


const Amazon = () => {
    const imgPath = "/images/work/amazon/";

    return (
        <Layout>
            <Head>
                <title>amazon | simplesthing</title>
            </Head>
            <h1>Amazon</h1>

            <P>
                I contracted for a year with Amazon Creative Services making interactive widgets for the retail site. At the start
                there were four UX designers and myself, the first developer hired on the UX team in an experiment to mix developers and designers on the same team for faster iterations.
                Two of the designers wrote HTML, CSS and some JavaScript. I focused on making their functional prototypes fully dynamic by connecting them to Amazon
                back end services for data queries based on user purchase history using PERL mason and jQuery.
                This was the first time a non development team had made interactive widgets for the retail site.
            </P>

            <h2>Discover new music</h2>

            <video controls="controls" autoPlay="autoplay" poster={`${imgPath}discover-new-music.files/html5video/DNM-screencast2.jpg`} style={{ width: "100%" }} title="DNM-screencast2" loop="loop" >
                <source src={`${imgPath}discover-new-music.files/html5video/DNM-screencast2.m4v`} type="video/mp4" />
                <source src={`${imgPath}discover-new-music.files/html5video/DNM-screencast2.webm`} type="video/webm" />
                <source src={`${imgPath}discover-new-music.files/html5video/DNM-screencast2.ogv`} type="video/ogg" />
                <source src={`${imgPath}discover-new-music.files/html5video/DNM-screencast2.mp4`} />
            </video>
            <DefaultMarginTop />
            <P> The widget above was my favorite, it helped shoppers discover new music that they might like based on the last music they purchased or browsed.
                The reason this widget was so much fun was because it combined all the hacks and discoveries our team had made together in our first six months of making
                interactive widgets together. We created an AJAX (yes I said AJAX) proxy page as way to expose otherwise internal API&apos;s by converting PERL to JSON and sending it back in response,
                along with appropriate headers, for our widget to consume.</P>

            <h2>Hero slider</h2>

            <video controls="controls" autoPlay="autoplay" poster={`${imgPath}hero-slider-jp.files/html5video/hero-slider-jp.jpg`} style={{ width: "100%" }} title="hero-slider-jp" loop="loop" >
                <source src={`${imgPath}hero-slider-jp.files/html5video/hero-slider-jp.m4v`} type="video/mp4" />
                <source src={`${imgPath}hero-slider-jp.files/html5video/hero-slider-jp.webm`} type="video/webm" />
                <source src={`${imgPath}hero-slider-jp.files/html5video/hero-slider-jp.ogv`} type="video/ogg" />
                <source src={`${imgPath}hero-slider-jp.files/html5video/hero-slider-jp.mp4`} />
            </video>
            <DefaultMarginTop />
            <P>
                The challenges that language can create when the widgets were used in international markets was also a bit challenging at times.
                The mechanisms for translating the text itself wasn&apos;t the issue as much as the effect that other languages have on the design, such as German text needing more width
                and Asian text needing a little more height.
            </P>

            <h2>Digital games</h2>
            <video controls="controls" autoPlay="autoplay" poster={`${imgPath}digital-games.files/html5video/digital-games-page.jpg`} style={{ width: "100%" }} title="digital-games-page" loop="loop" onended="var v=this;setTimeout(function(){v.play()},300)">
                <source src={`${imgPath}digital-games.files/html5video/digital-games-page.m4v`} type="video/mp4" />
                <source src={`${imgPath}digital-games.files/html5video/digital-games-page.webm`} type="video/webm" />
                <source src={`${imgPath}digital-games.files/html5video/digital-games-page.ogv`} type="video/ogg" />
                <source src={`${imgPath}digital-games.files/html5video/digital-games-page.mp4`} />
            </video>
            <DefaultMarginTop />
            <P>
                Digital games category was by far our largest consumer of widgets, the clip above is showing an entire page of our widgets being used.
            </P>
        </Layout>
    );
};

export default Amazon;

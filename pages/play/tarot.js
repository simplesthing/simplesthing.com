import BackToHome from "../../components/back-to-home";
import { DefaultMarginTop } from "../../components/styles/utilities";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import useWindowSize from "../../hooks/use-window-size";

const Tarot = () => {
    const { width } = useWindowSize();
    const imgPath = "/images/play/tarot/";
    const iWidth = width > 600 ? 353 : 176;
    const iHeight = width > 600 ? 303 : 151;

    const pWidth = width > 600 ? 600 : 300;
    const pHeight = width > 600 ? 589 : 295;

    const cWidth = width > 600 ? 706 : 353;
    const cHeight = width > 600 ? 426 : 213;

    return (
        <Layout>
            <Head>
                <title>tarot | simplesthing</title>
            </Head>
            <BackToHome anchor="#tarot" />
            <h1>Tarot 8</h1>

            <p>
                As a student of art and a self taught coder (for the most part) I have found the best way for me to learn a new skill, is to solve a familiar problem in a new way.
            </p>

            <DefaultMarginTop />
            <p> Tarot 8 is the eighth exhibition of my tarot card hobby app, written in JavaScript. This time around I wanted to make a mobile app with React Native as well as a React Web application with the same components.
                Furthermore I wanted to share a Storybook repository of components between them inside a monorepo.
            </p>
            <h2>Design</h2>

            <p>
                The card shuffling and dealing CSS is from a previous iteration of the app and needed only to convert the coordinates to use React Native Reanimated for mobile, while maintaining a CSS version for web animation.
            </p>

            <DefaultMarginTop />

            <Image src={`${imgPath}shuffle.jpg`} width={iWidth} height={iHeight} alt="Shuffle cards" />

            <span> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;</span>

            <Image src={`${imgPath}cut_deal.jpg`} width={iWidth} height={iHeight} alt="cut and deal acrds" />
            <DefaultMarginTop />

            <Image src={`${imgPath}storybook_deal.jpg`} width={pWidth} height={pHeight} alt="Storybook deal component" />

            <DefaultMarginTop />
            <p>
                New screens for the app are built in mobile first, then converted to web using Storybook to separate the web or mobile specific components.
                It&apos;s also a good place to stub out data required for unit tests.
            </p>

            <DefaultMarginTop />
            <Image src={`${imgPath}component_dev_carousel.jpg`} width={cWidth} height={cHeight} alt="Tarot card carousel component" />

            <DefaultMarginTop />
            <p>
                Currently the backend is a Firebase data store with Google oAuth. Next iteration planned to convert the small dataset that exists today
                into a GraphQL API with Postgres and Apollo.
            </p>
            <BackToHome anchor="#tarot" />
        </Layout>
    );
};

export default Tarot;

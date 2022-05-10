import BackToHome from "../../components/back-to-home";
import { DefaultMarginTop } from "../../components/styles/utilities";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../../components/styles";

const Disney = () => {
    const imgPath = "/images/work/disney/";

    return (
        <Layout>
            <Head>
                <title>disney | simplesthing</title>
            </Head>
            <BackToHome anchor="#disney" />
            <h1>Disney Interactive</h1>

            <p>
                Contract developer for the social team at Disney Interactive in Redmond.
                I built widgets that could be embedded onto webpages or an overlay on top of game client UI for various Disney Flash/Lua games.
                This was the first time I used MVC style JavaScript, AMD modules with require.js and even Ember before it&apos;s first stable release.
            </p>

            <h2>Club Penguin</h2>
            <p>
                My first project was to create, the &quot;Disney Like Button&quot; to be an embeddable widget that could be used across Disney websites as a way to allow kids to participate in a social network in protected games like Club Penguin.
                For example in Club Penguin kids get their own igloo to call home in the game, they can earn or buy points to decorate their igloos. In game friends can visit each other&apos;s igloo&apos;s and leave a like.
            </p>
            <DefaultMarginTop />
            <Image src={`${imgPath}like-button.png`} width={350} height={124} alt="Disney like button" />
            <DefaultMarginTop />
            <Image src={`${imgPath}like-friends.png`} width={500} height={400} alt="Disney like button with friends list" />


            <h2>Disney chat</h2>

            <p>
                Another embeddable widget to be part of this cross site social network was a chat that was anchored to the bottom of the browser window. Kids could play different games online and still be connected through the Disney Social Chat .
            </p>
            <DefaultMarginTop />

            <video controls="controls" autoPlay="autoplay" poster={`${imgPath}chat.files/html5video/chat.jpg`} style={{ width: "100%" }} title="DNM-screencast2" loop="loop" >
                <source src={`${imgPath}chat.files/html5video/chat.m4v`} type="video/mp4" />
                <source src={`${imgPath}chat.files/html5video/chat.webm`} type="video/webm" />
                <source src={`${imgPath}chat.files/html5video/chat.webm`} type="video/ogg" />
                <source src={`${imgPath}chat.files/html5video/chat.mp4`} />
            </video>
            <DefaultMarginTop />
            <Image src={`${imgPath}embed-code.png`} width={553} height={277} alt="Embed code" />
            <p>

            </p>
            <BackToHome anchor="#disney" />
        </Layout>
    );
};

export default Disney;

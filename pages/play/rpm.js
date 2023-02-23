import { Avatar, Exhibit } from '@readyplayerme/visage';
import React, { useEffect, useRef, useState } from "react";

import BackToHome from "../../components/back-to-home";
import Head from "next/head";
import Layout from "../../components/layout";
import styled from "styled-components";

const Iframe = styled.iframe`
width: 1080px;
height: 800px;
  margin: 0;
  padding: 20px;
  font-size: 14px;
  border: 1px #fff solid;
`;

const Model = styled.div`
width: 100%;
height: 500px;
`

const DEFAULT_MODEL =
    "https://models.readyplayer.me/63f6e2d33cade24b03398d41.glb";

const Rpm = () => {
    const [modelUrl, setModelUrl] = useState(DEFAULT_MODEL);
    const rpmRef = useRef();

    useEffect(() => {

    }, [])

    return (
        <Layout>
            <Head>
                <title>ready player me | simplesthing</title>
            </Head>
            {/* <BackToHome anchor="#rpm" /> */}
            <h1>Ready Player Me</h1>
            <section>
                <p>
                    Ready Player Me is a cross-game avatar platform for Unity, Unreal Engine, and web. This means you can
                    take your avatar with you into different games and applications that support Ready Player Me SDK and not have
                    to worry about creating a new character each time.
                </p>
                <Model>
                    <Avatar modelSrc={modelUrl} cameraInitialDistance={4} />
                    {/* <Exhibit scale={1} position={[0, 0, 4]} modelSrc={modelUrl} /> */}
                </Model>
            </section>
            <section>
                <p>
                    Below is a trivial example of how to implement a character creator for your own game/app using the Ready Player Me Character Creator.
                </p>
            </section>
            <Iframe
                id="rpm"
                src="https://simplesthing.readyplayer.me/avatar?frameApi"
                allow="camera *; microphone *; clipboard-write"
                ref={rpmRef}
                on
            ></Iframe>
            {/* <BackToHome anchor="#rpm" /> */}
        </Layout>
    );
};

export default Rpm;

import React, { useEffect, useRef } from "react";

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
`

const Rpm = () => {
    const rpmRef = useRef()


    useEffect(() => {
        const onMessage = (event) => {
            const json = JSON.parse(event);

            if (json?.source !== 'readyplayerme') {
                return;
            }
        };

        document.addEventListener("message", onMessage);

        return () => {
            document.removeEventListener("message", onMessage);
        };
    }, []);

    return (
        <Layout>
            <Head>
                <title>ready player me | simplesthing</title>
            </Head>
            <BackToHome anchor="#rpm" />
            <h1>Ready Player Me</h1>
            <model-viewer id="modelviewer" alt="Ready Player Me Avatar"
                src="https://models.readyplayer.me/63f6e2d33cade24b03398d41.glb" shadow-intensity="1" camera-controls
                touch-action="pan-y">
            </model-viewer>
            <p>
                Ready Player Me API is a joy to use, a quick and dirty example here of
                what it can do with webGL. Unity and UE SDK's are equally as developed
                and compatible.
            </p>
            <Iframe id="rpm" allow="camera *; microphone *; clipboard-write" ref={rpmRef}></Iframe>
            <BackToHome anchor="#rpm" />
        </Layout>
    );
};

export default Rpm;

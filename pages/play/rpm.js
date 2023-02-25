import React, { useRef, useState } from "react";
import { Avatar } from "@readyplayerme/visage";
import BackToHome from "../../components/back-to-home";
import Head from "next/head";
import Layout from "../../components/layout";
import styled from "styled-components";

const DEFAULT_MODEL =
  "https://models.readyplayer.me/63f6e2d33cade24b03398d41.glb";

const Rpm = () => {
  const [modelUrl, setModelUrl] = useState(DEFAULT_MODEL);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const frame = useRef();
  const inp = useRef();

  const onEnter = (e) => {
    if (!e.keyCode || e.keyCode === 13) {
      const url = e.target.value;
      const regex = /^https:\/\/(.*).readyplayer.me\/(.*).glb/;
      if (regex.test(url)) {
        setModelUrl(url);
        inp.current.value = "";
        setLoading(true);
      } else {
        setError(true);
      }
    }
  };

  const clearError = () => {
    setError(false);
  };

  const onLoaded = () => {
    setLoading(false);
  };

  return (
    <Layout>
      <Head>
        <title>ready player me | simplesthing</title>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="ready player me | simplesthing" />
        <meta
          property="og:url"
          content="https://www.simplesthing.com/play/rpm"
        />
        <meta
          property="og:image"
          content="https://www.simplesthing.com/images/play/rpm-avatar-crop.jpg"
        />
      </Head>
      <BackToHome anchor="#rpm" />
      <h1>Ready Player Me</h1>
      <section>
        <p>
          <a href="https://readyplayer.me/" target="_blank">
            Ready Player Me
          </a>{" "}
          is a cross-game avatar platform for Unity, Unreal Engine, and webGL.
          They provide a character creator, to make your own avatar, and a
          service to host your avatar assets at a unique url, this means you can
          take your avatar with you into different games and applications that
          support the Ready Player Me SDK.
        </p>
      </section>
      <h3>Avatar</h3>
      <section>
        <p>
          Using{" "}
          <a href="https://github.com/readyplayerme/visage" target="_blank">
            Visage
          </a>
          , open source React components designed to showcase Ready Player Me
          Avatars, I have my Avatar loaded as a demonstration of how to use an
          avatar &quot;in game&quot;. To see your character loaded into the
          &quot;game&quot; paste the Ready Player Me Avatar url into the input
          and hit enter. If you don&apos;t have a Ready Player Me Avatar you can
          create one in the avatar creator below.
        </p>
        <figure>
          <Model>
            {loading && <Spinner />}
            <Avatar
              modelSrc={modelUrl}
              cameraInitialDistance={3}
              onLoaded={onLoaded}
            />
          </Model>
          <figcaption className="sr-only">An html canvas element displaying a 3D model of my Ready Player Me avatar. </figcaption>
        </figure>
        <Form>
          <Input
            type="text"
            placeholder="avatar url"
            title="avatar url"
            id="avatarUrl"
            onKeyDown={onEnter}
            onFocus={clearError}
            onChange={clearError}
            ref={inp}
          />
          <FormEnter
            title="Enter avatar url form"
            name="Enter"
            onClick={onEnter}
          >
            ENTER
          </FormEnter>
        </Form>
        <Wrapper>
          {!error && <p> &nbsp;</p>}
          {error && (
            <Error>
              Avatar url format should match: &nbsp;
              <Em>
                https://models.readyplayer.me/63f6e2d33cade24b03398d41.glb{" "}
              </Em>
            </Error>
          )}
        </Wrapper>
      </section>
      <h3>Editor</h3>
      <section>
        <p>
          The iframe below is quick and dirty demonstration of the Ready Player
          Me Avatar Creator example provided when you{" "}
          <a href="https://studio.readyplayer.me/signin" target="_blank">
            sign up as a developer
          </a>{" "}
          on their studio domain. After signing up and registering your game
          information RPM will assign a domain for you to use as a portal to
          access players&apos; universal avatars, or allow them to create a new
          one for your game. If you already have an avatar all you have to do is
          sign in to choose your avatar and copy the url, otherwise you can
          create a new one anonymously and copy the url presented after
          completing creation.
        </p>
        <Wrapper>
          <Iframe
            id="rpm"
            src="https://simplesthing.readyplayer.me/avatar?frameApi"
            allow="camera *; microphone *; clipboard-write"
            ref={frame}
          ></Iframe>
        </Wrapper>
      </section>
      
      <BackToHome anchor="#rpm" />
    </Layout>
  );
};

export default Rpm;

const Model = styled.div`
  position: relative;
  width: 80%;
  height: 500px;
  background-image: url("/images/play/pixabay-galaxy.jpg");
  background-size: cover;
  background-color: #000;
  margin: 1.5rem 10%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  justify-content: center;
`;

const Iframe = styled.iframe`
  max-width: 1080px;
  max-height: 800px;
  width: 100vh;
  height: 74vh;
  margin: 0;
  padding: 20px;
  font-size: 14px;
  border: none;
`;

const Error = styled.p`
  color: #ff0000;
`;

const Em = styled.em`
  font-style: italic;
  font-size: 0.9rem;
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  position: relative;
  width: 60%;
  display: block;
  font-size: 18px;
  padding: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: accent1;
  }
`;

const FormEnter = styled.button`
  padding: 5px 10px;
  background-color: #ff3305;
  border: 1px solid papayawhip;
  color: papayawhip;
  font-size: 1.25rem;
  border-radius: 3px;
  margin: 0 0.5rem;
`;

const Spinner = styled.div`
  border: 20px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  border-top-color: #ff3305;
  opacity: 1;
  position: absolute;
  z-index: 100;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  width: 80px;
  height: 80px;
  transition: opacity 250ms;
  animation: rotate-spinner 1s linear;
  animation-iteration-count: infinite;

  @keyframes rotate-spinner {
    100% {
      transform: rotate(360deg);
    }
  }
`;

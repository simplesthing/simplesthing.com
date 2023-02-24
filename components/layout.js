import { Layout as Container, accent1, mqSmall } from "./styles/index";

import Head from "next/head";
import Link from "next/link";
import ProfilePic from "./profile-pic";
import dynamic from "next/dynamic";
import styled from "styled-components";

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: stretch;
  model-viewer {
    width: 99vw;
    height: 20vh;
    @media ${mqSmall} {
      height: 40vh;
    }

    *:focus {
      outline-color: ${accent1};
    }
  }
`;

const DynamicHeader = dynamic(() => import("./tiltbrush-header"), { loading: () => <h6> loading glb...</h6> });

export default function Layout({ children, home }) {
  return <>
    <Head>
      <title>ava collins | simplesthing</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="The simplest answer is always the truth"
      />
      <meta property="og:title" content="simplesthing" />
      <meta property="og:url" content="https://www.simplesthing.com/" />
      <meta property="og:image" content="https://www.simplesthing.com/_next/image?url=%2Fimages%2Fprofile_waifu.jpg&w=256&q=75" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>

    {home ? (
      <Wrapper>
        <DynamicHeader />
      </Wrapper>
    ) : (
      <Header>
        <Link legacyBehavior href="/"><a><ProfilePic /></a></Link>
      </Header>
    )
    }

    <Container>{children}</Container>


  </>;
}

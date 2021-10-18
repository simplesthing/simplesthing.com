import { Layout as Container, accent1, mqSmall } from "./styles/index";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import ProfilePic from "./profile-pic";
import BackToHome from "./back-to-home";

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
      <link rel="manifest" href="/site.webmanifest" />
    </Head>

    {home ? (
      <Wrapper>
        <DynamicHeader />
      </Wrapper>
    ) : (
      <Header>
        <Link href="/"><a><ProfilePic /></a></Link>
      </Header>
    )
    }
    {!home && (
      <BackToHome />
    )}
    <Container>{children}</Container>

    {!home && (
      <BackToHome/>
    )}

  </>;
}

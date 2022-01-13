import Head from "next/head";
import Layout from "../../components/layout";
import { lightBase } from "../../components/styles/index";
import styled from "styled-components";

const P = styled.p`
  color: ${lightBase};
`;


const Solana = () => {


    return (
        <Layout>
            <Head>
                <title>solana | simplesthing</title>
            </Head>
            <h1>Solana</h1>

            <P>
                Deep dive research into blockchain, crypto and NFT&apos;s.
                I do this as exploration into what can be done, not always as an endorsement of what should be done, but to understand it.
                See the code on <a href="https://github.com/simplesthing/metaplex">github</a> and the demo application <a href="https://simplesthing.github.io/metaplex#/">NFT marketplace</a>.
            </P>


        </Layout>
    );
};

export default Solana;

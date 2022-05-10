import BackToHome from "../../components/back-to-home";
import Head from "next/head";
import Layout from "../../components/layout";

const Solana = () => {


    return (
        <Layout>
            <Head>
                <title>solana | simplesthing</title>
            </Head>
            <BackToHome anchor="#solana" />
            <h1>Solana</h1>

            <p>
                Deep dive research into blockchain, crypto and NFT&apos;s.
                I do this as exploration into what can be done, not always as an endorsement of what should be done, but to understand it.
                See the code on <a href="https://github.com/simplesthing/metaplex">github</a> and the demo application <a href="https://simplesthing.github.io/metaplex#/">NFT marketplace</a>.
            </p>
            <BackToHome anchor="#solana" />

        </Layout>
    );
};

export default Solana;

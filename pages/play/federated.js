import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";

const Federated = () => {

    return (
        <Layout>
            <Head>
                <title>federated modules | simplesthing</title>
            </Head>
            <h1>Federated Modules</h1>

            <p>
                <a href="https://webpack.js.org/concepts/module-federation" target="_blank" rel="noreferrer">Webpack 5 module federation</a> demo using yarn workspace and storybook for react components.
            </p>

            <br />
            <p>
                The &quot;Remote&quot; application components is a storybook application that exposes UI components; `Button`, `SvgImage` and `Header`.
                <Image src="https://github.com/simplesthing/federated-modules/blob/main/packages/assets/components-storybook.png?raw=true" width={474} height={461} alt="storybook screenshot" />
            </p>
            <br />
            <p>
                &quot;Remote&quot; applications `astrology` and `dreams` are consuming the remote UI from the storybook components <em>application</em> rather than bundling them into their own builds.
            </p>
            <br />
            <p>
                <Image src="https://github.com/simplesthing/federated-modules/blob/main/packages/assets/federation-module-plugin.png?raw=true" width={516} height={289} alt="federated module config screenshot" />

                <Image src="https://github.com/simplesthing/federated-modules/blob/main/packages/assets/component-federation-config.png?raw=true" width={418} height={126} alt="webpack plugin screenshot" />
            </p>
            <br />
            <p>
                See video below for a simple contrived example of the consumption and live updating of a color value in header component CSS file from the storybook application. Both astrology and dreams applications are pulling their header component into their bundle from the live components application that is serving the remote components via webpack module federation.

            </p>
            <br />
            <video controls src='https://github.com/simplesthing/federated-modules/blob/main/packages/assets/federated-demo.mp4?raw=true' width="500" />

            <p>Try it yourself: <a href="https://github.com/simplesthing/federated-modules" target="_blank" rel="noreferrer"> Code on github</a></p>

        </Layout>
    );
};

export default Federated;

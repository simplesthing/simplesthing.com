import BackToHome from "../../components/back-to-home";
import { DefaultMarginTop } from "../../components/styles/utilities";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import useWindowSize from "../../hooks/use-window-size";

const Porch = () => {
    const { width } = useWindowSize();
    const imgPath = "/images/work/porch/";
    const iWidth = width > 600 ? 2110 : 1055;
    const iHeight = width > 600 ? 832 : 416;

    const pWidth = width > 600 ? 300 : 150;
    const pHeight = width > 600 ? 650 : 325;

    return (
        <Layout>
            <Head>
                <title>porch group | simplesthing</title>
            </Head>
            <BackToHome anchor="#porch" />
            <h1>Porch Group</h1>
            <p>
                I paved the way for two teams to go from Zero to One mobile app in a whirlwind of growth for both the Porch Group and myself in one years time.
            </p>
            <br />
            <p>
                Leading engineering efforts for both teams in parallel at the onset, setting up development environments, evaluating options for everything essential in launching a mobile app.
                Existing business and code required consideration for end to end proprietary flows vs out of the box solutions when moving quickly at the start.
            </p>
            <DefaultMarginTop />
            <p>Both apps are proprietary applications for customers of <a href="https://www.inspectionsupport.com/">Inspection Support Network</a>, launched in Fall 2021, and <a href="https://porch.com">Porch</a>, currently in an invite only phase.</p>
            <DefaultMarginTop />
            <Image src={`${imgPath}isn-app.jpg`} width={iWidth} height={iHeight} alt="Inspection Support Network app" />
            <DefaultMarginTop />
            <p>
                Shortly after getting the ISN team up an running I focused my efforts on the Porch mobile app, this time from a product perspective as well as from engineering.
                Running scrum, writing documentation, managing JIRA issues, leading design reviews and product meetings, interviewing team members,
                and spending more than 50% of my time writing code and performing code reviews.
            </p>
            <DefaultMarginTop />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Image src={`${imgPath}invite-only.PNG`} width={pWidth} height={pHeight} alt="Porch mobile app" />
            </div>
            <BackToHome anchor="#porch" />
        </Layout>
    );
};

export default Porch;

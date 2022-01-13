import { PLAYLIST, WORK_HISTORY } from "../components/work/constants";

import Contact from "../components/contact";
import { DefaultMarginTop } from "../components/styles/utilities";
import Head from "next/head";
import Layout from "../components/layout";
import Work from "../components/work";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>ava collins | simplesthing</title>
      </Head>
      <h1 className="sr-only">
        Personal website for web developer Ava Collins
      </h1>
      <section>
        <h2 id="about">about</h2>
        <p>I like to think of what I do as a mix between a digital seamstress and a teacher of human as a second lanaguge. Coding for interactivity
          has always spoken to my heart, experiments in the evolving creation of new mediums for communication during my lifetime, I am here for this.
          I am a software engineer that specializes in the presentation layer, the presumbably human, user interface between the hardware and the software.
        </p>
        <DefaultMarginTop />
        <p>Over the years I have worked with different application stacks, versioning and design systems, project management techniques, coding frameworks and styles
          but most importantly with many different people. Involvement in community and critically thinking of ways to improve how we work with one another is just as important to me as writing code.
        </p>
        <DefaultMarginTop />
        <p>
          Our understanding of ourselves affects our products and how we make them. Our products affect the humans that use them. When we make an effort to consciously include all living beings and to practice empathy we
          lead the way to making better selves, products, workplaces and a better world for all.</p>
      </section>
      <section>
        <h2 id="work">work</h2>
        <Work list={WORK_HISTORY} />
      </section>
      <section>
        <h2 id="play">play</h2>
        <Work list={PLAYLIST} />
      </section>
      <section>
        <h2 id="contact">contact</h2>
        <Contact />
      </section>
    </Layout>
  );
}

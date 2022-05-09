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
        <p>I like to think of what I do as a mix between a digital seamstress and a student-teacher of human as a second language.
          I am a software engineer that specializes in the presentation layer, the presumably human, user interface between the hardware and the software.
          <DefaultMarginTop />
          Effective interfacing with humans is complex, there are many ways to achieve seemingly similar results each with their own complications and recipes for consistency while scaling.
          The evolution of any interface begins and ends with simplicity.
          <DefaultMarginTop />
          Nature shows us something as simple as polarity, positive and negative, these two simple poles of energy generate an electric charge capable of coalescing and bonding atoms into matter, a.k.a. the material world and everything in it.
          So simple yet so complex, this is what humans want while coding and using computers, simple easy to understand abstractions that are capable of composing complex systems.
          <DefaultMarginTop />
          This is what I have spent over a decade analyzing and implementing over and over and over again, its &apos;my thing&apos;, you can call me Simples.
        </p>
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

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
        <p>I&apos;m a software engineer that specializes in the presentation layer, the mostly visual, sometimes audible or haptic, user interface between the hardware and the software.
          Effective interfacing with humans is complex, there are many ways to achieve seemingly similar results, each with their own complications and recipes for consistency while scaling fast.
          <DefaultMarginTop />
          The evolution of any interface begins and ends with simplicity. Simple easy to understand abstractions that are capable of composing unique and complex systems.
          This is what I have spent over a decade analyzing and implementing over and over and over again, its my &apos;thing&apos;, simple.
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

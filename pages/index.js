import Head from "next/head";
import Layout from "../components/layout";
import Work from "../components/work";
import Contact from "../components/contact";


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
        <p>Over the years I have worked with different languages, application stacks, design systems, project management techniques, JavaScript frameworks, CSS processors
          and most importantly people. Involvement in community and critically thinking of ways to improve how we work with one another is just as important to me as writing code.
        </p><p>
          Our understanding of ourselves affects our products and how we make them. When we make an effort to consciously include all personas and to practice empathy we
          lead the way to making better products, workplaces and a better world for all.</p>
      </section>
      <section>
        <h2 id="work">work</h2>
        <Work />
      </section>
      <section>
          <h2 id="contact">contact</h2>
          <Contact/>
        </section>
    </Layout>
  );
}

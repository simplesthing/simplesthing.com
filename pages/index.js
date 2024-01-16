import { useEffect, useState } from "react";

import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div style={{ visibility: !mounted ? "hidden" : "" }}>
      <Layout home>
        <Head>
          <meta
          property="og:url"
          content="https://www.simplesthing.com"
        />
        <meta
          property="og:image"
          content="https://www.simplesthing.com/images/profile_waifu.jpg"
        />
        <meta name="twitter:card" content="https://www.simplesthing.com/images/profile_waifu.jpg"></meta>
        <meta name="twitter:title" content="simplesthing"></meta>
        </Head>
      </Layout>
    </div>
  );
}

import Head from "next/head";
import Proxy from "../src/components/Proxy";

export default function Home() {
  return (
    <>
      <Head>
        <title>Novu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Proxy />
      </main>
    </>
  );
}

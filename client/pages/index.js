import Head from "next/head";



export default function Home() {
  return (
    <div>
      <Head>
        <title>SpaceX Launches</title>
        <meta name="description" content="View all historic spaceX launches" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img
        src="/spacexlogo.png"
        alt="SpaceX"
        style={{ width: 300, display: "block", margin: "auto" }}
      />
    </div>
  );
}

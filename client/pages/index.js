import Head from "next/head";
// import { ApolloClient } from "@apollo/client";
import { ApolloProvider } from '@apollo/client/react'
import Launches from '../components/launches'

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Head>
          <title>SpaceX Launches</title>
          <meta
            name="description"
            content="View all historic SpaceX launches"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container">
          <img
            src="/spacexlogo.png"
            alt="SpaceX"
            style={{ width: 300, display: "block", margin: "auto" }}
          />
          <Launches />
        </div>
      </div>
    </ApolloProvider>
  );
}

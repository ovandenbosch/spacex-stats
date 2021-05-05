import Head from "next/head";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from '@apollo/client/react'
import Launches from '../components/Launches'
import Launch from '../components/Launch'

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache()
});

export default function Home() {
  return (
    
      <div>
        <Head>
          <title>SpaceX Launches</title>
          <meta
            name="description"
            content="View all historic SpaceX launches"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ApolloProvider client={client}>
        <div className="container">
          
          <Launches />
        </div>
        </ApolloProvider>
      </div>
  );
}

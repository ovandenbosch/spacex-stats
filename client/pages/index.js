import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import Launches from "../components/Launches";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

export default function Home({ data }) {
  console.log("hello: ", data);
  return (
    <div>
      <Head>
        <title>SpaceX Launches</title>
        <meta name="description" content="View all historic SpaceX launches" />
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

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
  });

  const { data, error, loading } = await client.query({
    query: gql`
      query LaunchesQuery {
        launches {
          id
          mission_name
          launch_date_local
          launch_success
        }
      }
    `,
  });

  if (loading) {
    return <h4>Loading ...</h4>;
  }
  if (error) console.log(error);

  console.log(data);
  return {
    props: {
      data: data,
    },
  };
}

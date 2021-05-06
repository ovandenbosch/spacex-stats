import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Launches from "../components/Launches";

export default function Home({ data, loading }) {
  return (
    <div>
      <Head>
        <title>SpaceX Launches</title>
        <meta name="description" content="View all historic SpaceX launches" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Launches data={data} loading={loading} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
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

  if (error) console.log(error);

  return {
    props: {
      data: data,
      loading: loading,
    },
  };
}

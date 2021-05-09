import { gql } from "@apollo/client";

import { getLaunchData } from "../../lib/getLaunches";
import classNames from "classnames";
import Link from 'next/link'
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

export default function Launch({ launch }) {
  
  const {
    mission_name,
    id,
    launch_year,
    launch_success,
    rocket: { rocket_name, rocket_type },
  } = launch.data.launch;
  return (
    <div className="container">
      <h1 className="display-4 my-3">
        <span className="text-dark">Mission: </span>
        {mission_name}
      </h1>
      <h4 className="mb-3">Launch Details</h4>
      <ul className="list-group">
        <li className="list-group-item">Flight Number: {id}</li>
        <li className="list-group-item">Launch Year: {launch_year}</li>
        <li className="list-group-item">
          Launch Successful:{" "}
          <span
            className={classNames({
              "text-success": launch_success,
              "text-danger": !launch_success,
            })}
          >
            {launch_success ? "Yes" : "No"}
          </span>
        </li>
      </ul>

      <h4 className="my-3">Rocket Details</h4>
      <ul className="list-group">
        <li className="list-group-item">Rocket Name: {rocket_name}</li>
        <li className="list-group-item">Rocket Type: {rocket_type}</li>
      </ul>
      <hr />
      <Link href="/">
        <a className="btn btn-secondary">Back</a>
      </Link>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const launchData = await getLaunchData(parseInt(params.id));
  return {
    props: { launch: launchData },
  };
}

export async function getStaticPaths() {
  const { data, error } = await client.query({
    query: gql`
      query LaunchesQuery {
        launches {
          id
        }
      }
    `,
  });

  const paths = await data.launches.map((element) => ({
    params: { id: element.id.toString() },
  }));

  return { paths, fallback: false };
}

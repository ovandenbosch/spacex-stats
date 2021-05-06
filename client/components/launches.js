import { gql } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      id
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export default function Launches({data, loading}) {
  
  if(loading) return <h4>Loading ...</h4>

  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />

      {data.launches.map((launch) => (
        <LaunchItem key={launch.id} launch={launch} />
      ))}
    </>
  );
}

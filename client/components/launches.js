import { useQuery, gql } from "@apollo/client";
import LaunchItem from './LaunchItem'
import MissionKey from './MissionKey'

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

function LaunchQuery() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <h4>Loading...</h4>;
  if (error) console.log(error);

  return <>
    {data.launches.map(launch => (
      <LaunchItem key={launch.id} launch={launch} />
    ))}
  </>;
}

export default function Launches() {
  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      <LaunchQuery />
    </>
  );
}

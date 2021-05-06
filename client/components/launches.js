import { gql, ApolloClient, InMemoryCache } from "@apollo/client";
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

export default function Launches({hello}) {
  console.log(hello);
  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      <p>Hello</p>

      {/* {data.launches.map((launch) => (
        <LaunchItem key={launch.id} launch={launch} />
      ))} */}
    </>
  );
}

// export function LaunchQuery() {
//   const { loading, error, data } = useQuery(LAUNCHES_QUERY);
//   if (loading) return <h4>Loading...</h4>;
//   if (error) console.log(error);

//   return (
//     <>
//       {data.launches.map((launch) => (
//         <LaunchItem key={launch.id} launch={launch} />
//       ))}
//     </>
//   );
// }



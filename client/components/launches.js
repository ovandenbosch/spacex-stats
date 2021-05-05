import { useQuery, gql } from "@apollo/client";

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

export default function Launches() {
  return (
    <div>
      <h1 className="display-4 my-3">Launches</h1>
      
    </div>
  );
}

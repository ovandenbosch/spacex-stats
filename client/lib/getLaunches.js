import { gql } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: true,
  uri: "http://localhost:5555/graphql",
  cache: new InMemoryCache(),
});

export async function getLaunchData(id) {
  const { data, error } = await client.query({
    variables: {
      id,
    },
    query: gql`
      query LaunchQuery($id: Int!) {
        launch(id: $id) {
          mission_name
          launch_year
          launch_success
          launch_date_local
          id
          rocket {
            rocket_name
            rocket_type
          }
        }
      }
    `,
  });

  if (error) console.log(error)

  return {
    data,
  };
}

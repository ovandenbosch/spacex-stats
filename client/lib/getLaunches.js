import { gql } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

export async function getLaunchData(id) {
  const { data } = await client.query({
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


  return {
    data,
  };
}

import { gql } from "@apollo/client";
import client from "../../apollo-client";

export default function Launch({ data, loading }) {
  console.log(data)
  return (
    <div className="container">
      <h1 className="display-4 my-3">Helo</h1>
    </div>
  );
}

// export async function getStaticPaths() {
//   const { launches } = await client.query({
//     query: gql`
//       query LaunchesQuery {
//         launches {
//           id
//         }
//       }
//     `,
//   });

//   const paths = launches.map((element) => {
//     params: {
//       launchId: element.id;
//     }
//   });

//   return { paths, fallback: false };
// }

export async function getStaticProps() {
  const { data, error, loading } = await client.query({
    query: gql`
      query LaunchesQuery {
        launches {
          launch_year
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

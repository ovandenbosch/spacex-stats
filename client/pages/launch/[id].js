import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { getLaunchData } from "../../lib/getLaunches";

export default function Launch({ launch }) {
  // console.log(launch.data.launch.id)
  
  return (
    <div className="container">
      <h1 className="display-4 my-3">Id: {launch.data.launch.id}</h1>
      {/* <h1 className="display-4 my-3">Id: {launch.data.launch.id}</h1> */}
    </div>
  );
}

export async function getStaticProps({params}) {
  const launchData = await getLaunchData(parseInt(params.id));
  return {
    props: { launch: launchData },
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query LaunchesQuery {
        launches {
          id
        }
      }
    `,
  });

  const paths = await data.launches.map((element) => ({
    params: {id: element.id.toString()},
  }))

  return {paths, fallback: false}
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

import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { getIds, getLaunchData } from "../../lib/getLaunches";

// export async function getStaticPaths() {
//   const paths = await getIds();
//   return {
//     paths,
//     fallback: false,
//   };  
// }  

export async function getStaticProps() {
  const launchData = await getLaunchData(3);
  const { params } = await getIds()
  console.log('params',params)
  return {
    props: { launch: launchData },
  };
}




export default function Launch({ launch }) {
  console.log(launch.data.launch.id)
  return (
    <div className="container">
      <h1 className="display-4 my-3">Id: {launch.data.launch.id}</h1>
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

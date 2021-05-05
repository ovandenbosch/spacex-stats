import { gql, useQuery } from "@apollo/client";
import Link from "next/head";
import classNames from "classnames";

const LAUNCH_QUERY = gql`
  query LaunchQuery($id: Int!) {
    launch(id: $id) {
      id
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;

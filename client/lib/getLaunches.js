import client from '../apollo-client'
import { gql } from '@apollo/client'

export function getIds() {
    const { data } = await client.query({
    query: gql`
      query LaunchesQuery {
        launches {
          id
        }
      }
    `,
  });

  return {
      
  }
}
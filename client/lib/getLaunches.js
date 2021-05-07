import client from '../apollo-client'
import { gql } from '@apollo/client'

export async function getIds() {
    const { data } = await client.query({
    query: gql`
      query LaunchesQuery {
        launches {
          id
        }
      }
    `,
  });

  return data.launches.map((element) => {
    
    console.log({params: {id: element.id}})
    return {
      params: {
        id: element.id
      },
      
    }
  })
}

export async function getLaunchData(id) {
  const { data } = await client.query({
    variables: {
      id
    },
    query: gql`
    query LaunchQuery($id: Int!) {
      launch(id: $id) {
        id
      }
    }
    `
  })

  return {
    data
  }
  
}
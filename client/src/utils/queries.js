import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      runCount
      savedRuns {
        runId
        date
        duration
        bumpLeft
        bumpRight
        stops
        left
        right
      }
    }
  }
`;

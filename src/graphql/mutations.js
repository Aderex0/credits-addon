import { gql } from '@apollo/client'

export const updateCreditsMutation = gql`
  mutation UpdateCredits($credits: Int, $id: ID) {
    updateCredits(credits: $credits, id: $id) {
      id
      credits
    }
  }
`

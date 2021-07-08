import { gql } from '@apollo/client'

export const updateCreditsMutation = gql`
  mutation UpdateCredits($credits: Int, $id: ID, $oldValue: Int) {
    updateCredits(credits: $credits, id: $id, oldValue: $oldValue) {
      id
      credits
    }
  }
`

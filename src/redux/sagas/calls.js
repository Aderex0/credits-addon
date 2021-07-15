import { client } from '../../api/ApolloClient'
import {
  getOrganisations,
  getLogsByOrganisation,
  getOrganisation
} from '../../graphql/queries'
import { updateCreditsMutation } from '../../graphql/mutations'

/***** GET *****/
// organisation
export const getOrganisationCall = variables => {
  return client.query({ query: getOrganisation, variables })
}

// all organisations
export const getOrganisationsCall = () => {
  return client.query({ query: getOrganisations })
}

// logs
export const getLogsByOrganisationCall = variables => {
  return client.query({
    query: getLogsByOrganisation,
    variables,
    fetchPolicy: 'network-only'
  })
}

/***** UPDATE *****/
// credits
export const updateCreditsCall = variables => {
  return client.mutate({ mutation: updateCreditsMutation, variables })
}

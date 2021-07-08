// Apollo
import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client'
// import { WebSocketLink } from 'apollo-link-ws'
import { onError } from '@apollo/client/link/error'
// import { getMainDefinition } from '@apollo/client/utilities'

// Error Handling
const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.amp(({ message, location, path }) => {
      console.log(`GraphQL error: ${message}`)
    })
  }
})

// Link creator
const httpLink = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:4000/graphql' })
])

// Apollo Client init
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
})

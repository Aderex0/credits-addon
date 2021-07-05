// Apollo
import { ApolloClient, InMemoryCache, HttpLink, from, split } from "@apollo/client";
import { WebSocketLink } from "apollo-link-ws";
import { onError } from "@apollo/client/link/error";
import { getMainDefinition } from "@apollo/client/utilities";

// Error Handling
const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.amp(({ message, location, path }) => {
      console.log(`GraphQL error: ${message}`);
    });
  }
});

// Websocket link
const wsLink = new WebSocketLink({
  uri: "ws://localhost:4000/graphql",
  options: {
    reconnect: true,
  },
});

// Link creator
const httpLink = from([errorLink, new HttpLink({ uri: "http://localhost:4000/graphql" })]);

// Link reducer
const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  httpLink
);

// Apollo Client init
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

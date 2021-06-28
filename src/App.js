// Apollo
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
// Components
// import ManageCredits from "./components/manage_credits/ManageCredits";
import SearchCompanies from "./components/search_companies/SearchCompanies";

// Error Handling
const errorLink = onError(({ graphqlErrors, networkErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.amp(({ message, location, path }) => {
      console.log(`GraphQL error: ${message}`);
    });
  }
});

// Link creator
const link = from([errorLink, new HttpLink({ uri: "http://localhost:4000/graphql" })]);

// Client initiation
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* <ManageCredits /> */}
      <SearchCompanies />
    </ApolloProvider>
  );
};

export default App;

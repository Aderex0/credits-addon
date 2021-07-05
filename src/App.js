// Apollo
import { ApolloProvider } from "@apollo/client";
import { client } from "./api/ApolloClient";
// Components
import ManageCredits from "./components/manage_credits/ManageCredits";
import SearchCompanies from "./components/search_companies/SearchCompanies";
// React
import { Route } from "react-router-dom";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Route path="/:id" render={(routerProps) => <ManageCredits {...routerProps} />} />
      <Route exact path="/" render={(routerProps) => <SearchCompanies {...routerProps} />} />
    </ApolloProvider>
  );
};

export default App;

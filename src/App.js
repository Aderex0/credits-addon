// Apollo
import { ApolloProvider } from '@apollo/client'
import { client } from './api/ApolloClient'
// Components
import ManageCreditsContainer from './components/manage_credits/ManageCreditsContainer'
import SearchOrganisations from './components/search_organisations/SearchOrganisations'
// React
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Route
        path='/:id'
        render={routerProps => <ManageCreditsContainer {...routerProps} />}
      />
      <Route
        exact
        path='/'
        render={routerProps => <SearchOrganisations {...routerProps} />}
      />
    </ApolloProvider>
  )
}

export default App

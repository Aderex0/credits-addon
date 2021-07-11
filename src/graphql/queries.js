import { gql } from "@apollo/client";

export const getOrganisations = gql`
  query {
    getOrganisations {
      id
      name
    }
  }
`;

export const getOrganisation = gql`
  query getOrganisation($id: ID!) {
    getOrganisation(id: $id) {
      id
      name
      credits
    }
  }
`;

export const getLogsByOrganisation = gql`
  query getLogsByOrganisation($organisationId: ID!) {
    getLogsByOrganisation(organisationId: $organisationId) {
      newValue
      oldValue
      createdAt
    }
  }
`;

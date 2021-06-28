import { gql } from "@apollo/client";

export const getCompanies = gql`
  query {
    getCompanies {
      id
      name
    }
  }
`;

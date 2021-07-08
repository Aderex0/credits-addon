import { gql } from '@apollo/client'

export const getCompanies = gql`
  query {
    getCompanies {
      id
      name
    }
  }
`

export const getCompany = gql`
  query getCompany($id: ID!) {
    getCompany(id: $id) {
      id
      name
      credits
    }
  }
`

export const getLogsByCompany = gql`
  query getLogsByCompany($companyId: ID!) {
    getLogsByCompany(companyId: $companyId) {
      newValue
      oldValue
      createdAt
    }
  }
`

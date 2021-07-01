import { takeEvery, put, takeLatest } from '@redux-saga/core/effects'
import { client } from '../../api/ApolloClient'
import { getCompanies, getCompany } from '../../graphql/queries'
import {
  getCompaniesFail,
  getCompaniesSuccess,
  getCompanyFail,
  getCompanySuccess
} from '../actions/companies.action'

function * getCompaniesSaga () {
  try {
    // call ?
    const { data } = yield client.query({ query: getCompanies })
    yield put(getCompaniesSuccess(data.getCompanies))
  } catch (err) {
    yield put(getCompaniesFail(err.message))
  }
}

export function * getCompaniesWatcher () {
  yield takeEvery('GET_COMPANIES_REQUEST', getCompaniesSaga)
}

function * getCompanySaga (action) {
  try {
    const { data } = yield client.query({
      query: getCompany,
      variables: {
        id: action.payload.id
      }
    })
    yield put(getCompanySuccess(data.getCompany))
  } catch (err) {
    yield put(getCompanyFail(err.message))
  }
}

export function * getCompanyWatcher () {
  yield takeLatest('GET_COMPANY_REQUEST', getCompanySaga)
}

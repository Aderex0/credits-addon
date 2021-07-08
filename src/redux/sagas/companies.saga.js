import { takeEvery, put, takeLatest } from '@redux-saga/core/effects'
import { client } from '../../api/ApolloClient'
import {
  getCompanies,
  getCompany,
  getLogsByCompany
} from '../../graphql/queries'
import { updateCreditsMutation } from '../../graphql/mutations'
import {
  getCompaniesFail,
  getCompaniesSuccess,
  getCompanyFail,
  getCompanySuccess,
  updateCreditsFail,
  updateCreditsSuccess,
  types,
  getLogsSuccess,
  getLogsFail
} from '../actions/companies.action'

// TODO: add call to yields

// Get all
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
  yield takeEvery(types.GET_COMPANIES_REQUEST, getCompaniesSaga)
}

// Get Logs
function * getCompanySaga (action) {
  const { id } = action.payload

  try {
    const { data } = yield client.query({
      query: getCompany,
      variables: { id }
    })
    yield put(getCompanySuccess(data.getCompany))
  } catch (err) {
    yield put(getCompanyFail(err.message))
  }
}

export function * getCompanyWatcher () {
  yield takeEvery(types.GET_COMPANY_REQUEST, getCompanySaga)
}

// Get Logs
function * getLogsSaga (action) {
  const { companyId } = action.payload

  try {
    const { data } = yield client.query({
      query: getLogsByCompany,
      variables: { companyId },
      fetchPolicy: 'network-only'
    })
    yield put(getLogsSuccess(data.getLogsByCompany))
  } catch (err) {
    yield put(getLogsFail(err.message))
  }
}

export function * getLogsWatcher () {
  yield takeEvery(types.GET_LOGS_REQUEST, getLogsSaga)
}

// Update credits
function * updateCreditsSaga (action) {
  const { id, credits, oldValue } = action.payload
  try {
    const { data } = yield client.mutate({
      mutation: updateCreditsMutation,
      variables: { id, credits, oldValue }
    })
    console.log(data)
    yield put(updateCreditsSuccess(data.updateCredits))
  } catch (err) {
    yield put(updateCreditsFail(err.message))
  }
}

export function * updateCreditsWatcher () {
  yield takeLatest(types.UPDATE_CREDITS_REQUEST, updateCreditsSaga)
}

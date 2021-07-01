import { all } from 'redux-saga/effects'
import { getCompaniesWatcher, getCompanyWatcher } from './companies.saga'

export default function * rootSaga () {
  yield all([getCompaniesWatcher(), getCompanyWatcher()])
}

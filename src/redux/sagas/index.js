import { all } from 'redux-saga/effects'
import {
  getCompaniesWatcher,
  getCompanyWatcher,
  getLogsWatcher,
  updateCreditsWatcher
} from './companies.saga'

export default function * rootSaga () {
  yield all([
    getCompaniesWatcher(),
    getCompanyWatcher(),
    updateCreditsWatcher(),
    getLogsWatcher()
  ])
}

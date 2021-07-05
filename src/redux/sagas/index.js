import { all } from "redux-saga/effects";
import { getCompaniesWatcher, getCompanyWatcher, updateCreditsWatcher } from "./companies.saga";

export default function* rootSaga() {
  yield all([getCompaniesWatcher(), getCompanyWatcher(), updateCreditsWatcher()]);
}

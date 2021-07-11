import { all } from "redux-saga/effects";
import { getOrganisationsWatcher, getOrganisationWatcher, getLogsWatcher, updateCreditsWatcher } from "./credits.saga";

export default function* rootSaga() {
  yield all([getOrganisationsWatcher(), getOrganisationWatcher(), updateCreditsWatcher(), getLogsWatcher()]);
}

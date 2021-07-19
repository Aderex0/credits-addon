// Redux
import { getLogsByOrganisationCall, getOrganisationCall, getOrganisationsCall, updateCreditsCall } from "./calls";
import { takeEvery, put, takeLatest, call } from "@redux-saga/core/effects";
import {
  getOrganisationsFail,
  getOrganisationsSuccess,
  getOrganisationFail,
  getOrganisationSuccess,
  updateCreditsFail,
  updateCreditsSuccess,
  types,
  getLogsByOrganisationSuccess,
  getLogsByOrganisationFail,
} from "../actions/credits.action";

// Get all
function* getOrganisationsSaga() {
  try {
    const { data } = yield call(getOrganisationsCall);
    yield put(getOrganisationsSuccess(data.getOrganisations));
  } catch (err) {
    yield put(getOrganisationsFail(err.message));
  }
}

export function* getOrganisationsWatcher() {
  yield takeEvery(types.GET_ORGANISATIONS_REQUEST, getOrganisationsSaga);
}

// Get Organisation
export function* getOrganisationSaga(action) {
  const { id } = action.payload;

  try {
    const { data } = yield call(getOrganisationCall, { id });
    if (data.getOrganisation) {
      yield put(getOrganisationSuccess(data.getOrganisation));
    } else {
      yield put(getOrganisationFail("data not found"));
    }
  } catch (err) {
    yield put(getOrganisationFail(err.message));
  }
}

export function* getOrganisationWatcher() {
  yield takeEvery(types.GET_ORGANISATION_REQUEST, getOrganisationSaga);
}

// Get Logs
export function* getLogsByOrganisationSaga(action) {
  const { organisationId } = action.payload;

  try {
    const { data } = yield call(getLogsByOrganisationCall, { organisationId });
    yield put(getLogsByOrganisationSuccess(data.getLogsByOrganisation));
  } catch (err) {
    yield put(getLogsByOrganisationFail(err.message));
  }
}

export function* getLogsWatcher() {
  yield takeEvery(types.GET_LOGS_BY_ORGANISATION_REQUEST, getLogsByOrganisationSaga);
}

// Update credits
export function* updateCreditsSaga(action) {
  const { id, credits, oldValue } = action.payload;
  try {
    const { data } = yield call(updateCreditsCall, { id, credits, oldValue });
    if (data.updateCredits) {
      yield put(updateCreditsSuccess(data.updateCredits));
    } else {
      yield put(updateCreditsFail("data not found"));
    }
  } catch (err) {
    yield put(updateCreditsFail(err.message));
  }
}

export function* updateCreditsWatcher() {
  yield takeLatest(types.UPDATE_CREDITS_REQUEST, updateCreditsSaga);
}

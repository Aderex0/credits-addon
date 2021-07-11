import { takeEvery, put, takeLatest } from "@redux-saga/core/effects";
import { client } from "../../api/ApolloClient";
import { getOrganisations, getOrganisation, getLogsByOrganisation } from "../../graphql/queries";
import { updateCreditsMutation } from "../../graphql/mutations";
import {
  getOrganisationsFail,
  getOrganisationsSuccess,
  getOrganisationFail,
  getOrganisationSuccess,
  updateCreditsFail,
  updateCreditsSuccess,
  types,
  getLogsSuccess,
  getLogsFail,
} from "../actions/credits.action";

// TODO: add call to yields

// Get all
function* getOrganisationsSaga() {
  try {
    // call ?
    const { data } = yield client.query({ query: getOrganisations });
    yield put(getOrganisationsSuccess(data.getOrganisations));
  } catch (err) {
    yield put(getOrganisationsFail(err.message));
  }
}

export function* getOrganisationsWatcher() {
  yield takeEvery(types.GET_ORGANISATIONS_REQUEST, getOrganisationsSaga);
}

// Get Logs
function* getOrganisationSaga(action) {
  const { id } = action.payload;

  try {
    const { data } = yield client.query({
      query: getOrganisation,
      variables: { id },
    });
    yield put(getOrganisationSuccess(data.getOrganisation));
  } catch (err) {
    yield put(getOrganisationFail(err.message));
  }
}

export function* getOrganisationWatcher() {
  yield takeEvery(types.GET_ORGANISATION_REQUEST, getOrganisationSaga);
}

// Get Logs
function* getLogsSaga(action) {
  const { organisationId } = action.payload;

  try {
    const { data } = yield client.query({
      query: getLogsByOrganisation,
      variables: { organisationId },
      fetchPolicy: "network-only",
    });
    yield put(getLogsSuccess(data.getLogsByOrganisation));
  } catch (err) {
    yield put(getLogsFail(err.message));
  }
}

export function* getLogsWatcher() {
  yield takeEvery(types.GET_LOGS_REQUEST, getLogsSaga);
}

// Update credits
function* updateCreditsSaga(action) {
  const { id, credits, oldValue } = action.payload;
  try {
    const { data } = yield client.mutate({
      mutation: updateCreditsMutation,
      variables: { id, credits, oldValue },
    });
    console.log(data);
    yield put(updateCreditsSuccess(data.updateCredits));
  } catch (err) {
    yield put(updateCreditsFail(err.message));
  }
}

export function* updateCreditsWatcher() {
  yield takeLatest(types.UPDATE_CREDITS_REQUEST, updateCreditsSaga);
}

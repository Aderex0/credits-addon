import { takeEvery, put, takeLatest } from "@redux-saga/core/effects";
import { client } from "../../api/ApolloClient";
import { getCompanies, getCompany } from "../../graphql/queries";
import { updateCreditsMutation } from "../../graphql/mutations";
import {
  getCompaniesFail,
  getCompaniesSuccess,
  getCompanyFail,
  getCompanySuccess,
  updateCreditsFail,
  updateCreditsSuccess,
  types,
} from "../actions/companies.action";

// TODO: add call to yields

// Get all
function* getCompaniesSaga() {
  try {
    // call ?
    const { data } = yield client.query({ query: getCompanies });
    yield put(getCompaniesSuccess(data.getCompanies));
  } catch (err) {
    yield put(getCompaniesFail(err.message));
  }
}

export function* getCompaniesWatcher() {
  yield takeEvery(types.GET_COMPANIES_REQUEST, getCompaniesSaga);
}

// Get company
function* getCompanySaga(action) {
  const { id } = action.payload;

  try {
    const { data } = yield client.query({
      query: getCompany,
      variables: { id },
    });
    yield put(getCompanySuccess(data.getCompany));
  } catch (err) {
    yield put(getCompanyFail(err.message));
  }
}

export function* getCompanyWatcher() {
  yield takeLatest(types.GET_COMPANY_REQUEST, getCompanySaga);
}

// Update credits
function* updateCreditsSaga(action) {
  const { id, credits } = action.payload;
  try {
    const { data } = yield client.mutate({
      mutation: updateCreditsMutation,
      variables: { id, credits },
    });
    yield put(updateCreditsSuccess(data.updateCredits));
  } catch (err) {
    yield put(updateCreditsFail(err.message));
  }
}

export function* updateCreditsWatcher() {
  yield takeLatest(types.UPDATE_CREDITS_REQUEST, updateCreditsSaga);
}

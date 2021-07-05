export const types = {
  ADD_CREDITS: "ADD_CREDITS",
  TRIGGER_SLIDER: "TRIGGER_SLIDER",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  GET_COMPANIES_REQUEST: "GET_COMPANIES_REQUEST",
  GET_COMPANIES_SUCCESS: "GET_COMPANIES_SUCCESS",
  GET_COMPANIES_FAIL: "GET_COMPANIES_FAIL",
  GET_COMPANY_REQUEST: "GET_COMPANY_REQUEST",
  GET_COMPANY_SUCCESS: "GET_COMPANY_SUCCESS",
  GET_COMPANY_FAIL: "GET_COMPANY_FAIL",
  UPDATE_CREDITS_REQUEST: "UPDATE_CREDITS_REQUEST",
  UPDATE_CREDITS_SUCCESS: "UPDATE_CREDITS_SUCCESS",
  UPDATE_CREDITS_FAIL: "UPDATE_CREDITS_FAIL",
};

// 1. CONTROLLED CREDIT FORM

export const addCredits = (payload) => ({
  type: types.ADD_CREDITS,
  payload,
});

// 2. OPEN/CLOSE SLIDER

export const triggerSlider = (payload) => ({
  type: types.TRIGGER_SLIDER,
  payload,
});

// 3. OPEN/CLOSE MODAL

export const openModal = (payload) => ({
  type: types.OPEN_MODAL,
  payload,
});

export const closeModal = (payload) => ({
  type: types.CLOSE_MODAL,
  payload,
});

// 4. GET ALL COMPANIES

export const getCompaniesRequest = (payload) => ({
  type: types.GET_COMPANIES_REQUEST,
  payload,
});

export const getCompaniesSuccess = (payload) => ({
  type: types.GET_COMPANIES_SUCCESS,
  payload,
});

export const getCompaniesFail = (payload) => ({
  type: types.GET_COMPANIES_FAIL,
  payload,
});

// 5. GET COMPANY

export const getCompanyRequest = (payload) => ({
  type: types.GET_COMPANY_REQUEST,
  payload,
});

export const getCompanySuccess = (payload) => ({
  type: types.GET_COMPANY_SUCCESS,
  payload,
});

export const getCompanyFail = (payload) => ({
  type: types.GET_COMPANY_FAIL,
  payload,
});

// 6. UPDATE CREDITS

export const updateCreditsRequest = (payload) => ({
  type: types.UPDATE_CREDITS_REQUEST,
  payload,
});

export const updateCreditsSuccess = (payload) => ({
  type: types.UPDATE_CREDITS_SUCCESS,
  payload,
});

export const updateCreditsFail = (payload) => ({
  type: types.UPDATE_CREDITS_FAIL,
  payload,
});

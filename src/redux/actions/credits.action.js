export const types = {
  ADD_CREDITS: "ADD_CREDITS",
  TRIGGER_SLIDER: "TRIGGER_SLIDER",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  GET_ORGANISATIONS_REQUEST: "GET_ORGANISATIONS_REQUEST",
  GET_ORGANISATIONS_SUCCESS: "GET_ORGANISATIONS_SUCCESS",
  GET_ORGANISATIONS_FAIL: "GET_ORGANISATIONS_FAIL",
  GET_ORGANISATION_REQUEST: "GET_ORGANISATION_REQUEST",
  GET_ORGANISATION_SUCCESS: "GET_ORGANISATION_SUCCESS",
  GET_ORGANISATION_FAIL: "GET_ORGANISATION_FAIL",
  UPDATE_CREDITS_REQUEST: "UPDATE_CREDITS_REQUEST",
  UPDATE_CREDITS_SUCCESS: "UPDATE_CREDITS_SUCCESS",
  UPDATE_CREDITS_FAIL: "UPDATE_CREDITS_FAIL",
  GET_LOGS_REQUEST: "GET_LOGS_REQUEST",
  GET_LOGS_SUCCESS: "GET_LOGS_SUCCESS",
  GET_LOGS_FAIL: "GET_LOGS_FAIL",
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

// 4. GET ALL ORGANISATIONS

export const getOrganisationsRequest = (payload) => ({
  type: types.GET_ORGANISATIONS_REQUEST,
  payload,
});

export const getOrganisationsSuccess = (payload) => ({
  type: types.GET_ORGANISATIONS_SUCCESS,
  payload,
});

export const getOrganisationsFail = (payload) => ({
  type: types.GET_ORGANISATIONS_FAIL,
  payload,
});

// 5. GET ORGANISATION

export const getOrganisationRequest = (payload) => ({
  type: types.GET_ORGANISATION_REQUEST,
  payload,
});

export const getOrganisationSuccess = (payload) => ({
  type: types.GET_ORGANISATION_SUCCESS,
  payload,
});

export const getOrganisationFail = (payload) => ({
  type: types.GET_ORGANISATION_FAIL,
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

// 7. GET LOGS REQUEST

export const getLogsRequest = (payload) => ({
  type: types.GET_LOGS_REQUEST,
  payload,
});

export const getLogsSuccess = (payload) => ({
  type: types.GET_LOGS_SUCCESS,
  payload,
});

export const getLogsFail = (payload) => ({
  type: types.GET_LOGS_FAIL,
  payload,
});

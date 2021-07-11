import { types } from "../actions/credits.action";

const initialState = {
  organisations: [],
  loading: false,
  error: null,
  organisation: {},
  openModal: false,
  credits: 0,
  log: [],
  // When adding to openSlider, change switch statement of CLOSE_MODAL
  openSlider: {
    add: false,
    edit: false,
    log: false,
  },
};

const credits = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_CREDITS_REQUEST:
    case types.GET_ORGANISATION_REQUEST:
    case types.GET_ORGANISATIONS_REQUEST:
    case types.GET_LOGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_CREDITS_FAIL:
    case types.GET_ORGANISATIONS_FAIL:
    case types.GET_ORGANISATION_FAIL:
    case types.GET_LOGS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case types.GET_LOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        log: payload,
      };
    case types.UPDATE_CREDITS_SUCCESS:
      return {
        ...state,
        loading: false,
        organisation: {
          ...state.organisation,
          credits: payload.credits,
        },
      };
    case types.GET_ORGANISATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        organisations: payload,
      };

    case types.GET_ORGANISATION_SUCCESS:
      return {
        ...state,
        loading: false,
        organisation: payload,
      };
    case types.OPEN_MODAL:
      return {
        ...state,
        openModal: true,
      };
    case types.CLOSE_MODAL:
      return {
        ...state,
        openModal: false,
        error: null,
        openSlider: {
          add: false,
          edit: false,
          log: false,
        },
      };
    case types.TRIGGER_SLIDER:
      return {
        ...state,
        openSlider: payload,
      };
    case types.ADD_CREDITS:
      return {
        ...state,
        credits: payload,
      };
    default:
      return state;
  }
};

export default credits;

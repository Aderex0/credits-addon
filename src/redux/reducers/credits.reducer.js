import { types } from '../actions/credits.action'

export const initialState = {
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
    log: false
  }
}

const credits = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_CREDITS_REQUEST:
    case types.GET_ORGANISATION_REQUEST:
    case types.GET_ORGANISATIONS_REQUEST:
    case types.GET_LOGS_BY_ORGANISATION_REQUEST:
      return {
        ...state,
        loading: true
      }
    case types.UPDATE_CREDITS_FAIL:
    case types.GET_ORGANISATIONS_FAIL:
    case types.GET_ORGANISATION_FAIL:
    case types.GET_LOGS_BY_ORGANISATION_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case types.GET_LOGS_BY_ORGANISATION_SUCCESS:
      return {
        ...state,
        loading: false,
        log: payload
      }
    case types.UPDATE_CREDITS_SUCCESS:
      return {
        ...state,
        loading: false,
        organisation: {
          ...state.organisation,
          credits: payload.credits
        }
      }
    case types.GET_ORGANISATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        organisations: payload
      }

    case types.GET_ORGANISATION_SUCCESS:
      return {
        ...state,
        loading: false,
        organisation: payload
      }
    case types.HANDLE_MODAL:
      return {
        ...state,
        payload
      }
    case types.TRIGGER_SLIDER:
      return {
        ...state,
        openSlider: payload
      }
    case types.ADD_CREDITS:
      return {
        ...state,
        credits: payload
      }
    default:
      return state
  }
}

export default credits

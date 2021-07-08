import { types } from '../actions/companies.action'

const initialState = {
  companies: [],
  loading: false,
  error: null,
  company: {},
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

const companies = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_CREDITS_REQUEST:
    case types.GET_COMPANY_REQUEST:
    case types.GET_COMPANIES_REQUEST:
    case types.GET_LOGS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case types.UPDATE_CREDITS_FAIL:
    case types.GET_COMPANIES_FAIL:
    case types.GET_COMPANY_FAIL:
    case types.GET_LOGS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case types.GET_LOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        log: payload
      }
    case types.UPDATE_CREDITS_SUCCESS:
      return {
        ...state,
        loading: false,
        company: {
          ...state.company,
          credits: payload.credits
        }
      }
    case types.GET_COMPANIES_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: payload
      }

    case types.GET_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        company: payload
      }
    case types.OPEN_MODAL:
      return {
        ...state,
        openModal: true
      }
    case types.CLOSE_MODAL:
      return {
        ...state,
        openModal: false,
        error: null,
        openSlider: {
          add: false,
          edit: false,
          log: false
        }
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

export default companies

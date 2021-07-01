import {
  GET_COMPANIES_REQUEST,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_FAIL,
  GET_COMPANY_REQUEST,
  GET_COMPANY_SUCCESS,
  GET_COMPANY_FAIL,
  OPEN_MODAL,
  CLOSE_MODAL,
  TRIGGER_EDITOR
} from '../actions/companies.action'

const initialState = {
  companies: [],
  loading: false,
  error: null,
  company: {},
  openModal: false,
  openEditor: {
    open: false,
    add: false
  }
}

const companies = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COMPANIES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_COMPANIES_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: payload
      }
    case GET_COMPANIES_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case GET_COMPANY_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        company: payload
      }
    case GET_COMPANY_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case OPEN_MODAL:
      return {
        ...state,
        openModal: true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        openModal: false,
        openEditor: {
          open: false,
          add: false
        }
      }
    case TRIGGER_EDITOR:
      return {
        ...state,
        openEditor: payload
      }
    default:
      return state
  }
}

export default companies

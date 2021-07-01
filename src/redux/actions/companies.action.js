// OPEN/CLOSE EDITOR
export const TRIGGER_EDITOR = 'TRIGGER_EDITOR'

export const triggerEditor = payload => ({
  type: TRIGGER_EDITOR,
  payload
})

// OPEN/CLOSE MODAL
export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export const openModal = payload => ({
  type: OPEN_MODAL,
  payload
})

export const closeModal = payload => ({
  type: CLOSE_MODAL,
  payload
})

// GET ALL
export const GET_COMPANIES_REQUEST = 'GET_COMPANIES_REQUEST'
export const GET_COMPANIES_SUCCESS = 'GET_COMPANIES_SUCCESS'
export const GET_COMPANIES_FAIL = 'GET_COMPANIES_FAIL'

export const getCompaniesRequest = payload => ({
  type: GET_COMPANIES_REQUEST,
  payload
})

export const getCompaniesSuccess = payload => ({
  type: GET_COMPANIES_SUCCESS,
  payload
})

export const getCompaniesFail = payload => ({
  type: GET_COMPANIES_FAIL,
  payload
})

// GET
export const GET_COMPANY_REQUEST = 'GET_COMPANY_REQUEST'
export const GET_COMPANY_SUCCESS = 'GET_COMPANY_SUCCESS'
export const GET_COMPANY_FAIL = 'GET_COMPANY_FAIL'

export const getCompanyRequest = payload => ({
  type: GET_COMPANY_REQUEST,
  payload
})

export const getCompanySuccess = payload => ({
  type: GET_COMPANY_SUCCESS,
  payload
})

export const getCompanyFail = payload => ({
  type: GET_COMPANY_FAIL,
  payload
})

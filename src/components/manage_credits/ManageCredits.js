// API
import {
  getCompanyRequest,
  openModal
} from '../../redux/actions/companies.action'
// Components
import Button from '../reusables/Button'
import Modal from '../reusables/Modal'
import CreditsPanel from './CreditsPanel'
// React
import { useEffect } from 'react'
// Redux
import { useDispatch, useSelector } from 'react-redux'
// Styles
import './ManageCredits.scss'

// Manage Credits(api call) => Modal({children}) => Credits Panel(child) => CreditEditor

/* Colors
  WL Orange = rgb(250, 111, 0)
  WL Teal = rgb(0, 62, 76)
*/

const ManageCredits = () => {
  const dispatch = useDispatch()
  const localUri = window.location.pathname.split('/')[1]
  // Company state
  const companyObj = useSelector(state => state.companies.company)

  useEffect(() => {
    dispatch(getCompanyRequest({ id: localUri }))
  }, [])

  return (
    <div className='manage-credits-btn-container'>
      <Button
        text='Manage credits'
        btnColor='rgb(250, 111, 0)'
        onClick={() => dispatch(openModal())}
      />
      <p>Available credits: {companyObj.credits}</p>
      {/* Components displayed in modal are passed as children */}
      <Modal>
        <CreditsPanel />
      </Modal>
    </div>
  )
}

export default ManageCredits

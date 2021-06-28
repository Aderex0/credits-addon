// API
import { useQuery } from '@apollo/client'
import { getCompany } from '../../graphql/queries'
// Components
import Button from '../reusables/Button'
import Modal from '../reusables/Modal'
import CreditsPanel from './CreditsPanel'
// React
import { useEffect, useState } from 'react'
// Styles
import './ManageCredits.scss'

// Manage Credits(api call) => Modal({children}) => Credits Panel(child) => CreditEditor

/* Colors
  WL Orange = rgb(250, 111, 0)
  WL Teal = rgb(0, 62, 76)
*/

const ManageCredits = () => {
  const [openModal, setOpenModal] = useState(false)
  const [companyObj, setCompanyObj] = useState({})
  const localUri = window.location.pathname.split('/')[1]

  const { data } = useQuery(getCompany, {
    variables: { id: localUri }
  })

  useEffect(() => {
    if (data) setCompanyObj(data.getCompany)
  }, [data])

  return (
    <div className='manage-credits-btn-container'>
      <Button
        text='Manage credits'
        btnColor='rgb(250, 111, 0)'
        onClick={() => setOpenModal(true)}
      />
      <p>Available credits: {companyObj.credits}</p>
      {/* Components displayed in modal are passed as children */}
      <Modal open={openModal} setOpenModal={setOpenModal}>
        <CreditsPanel
          companyObj={companyObj}
          setOpenModal={setOpenModal}
          setCompanyObj={setCompanyObj}
        />
      </Modal>
    </div>
  )
}

export default ManageCredits

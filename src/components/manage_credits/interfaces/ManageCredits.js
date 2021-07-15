// Components
import Button from '../../reusables/Button'
import Modal from '../../reusables/Modal'
import CreditsPanelContainer from '../../credits_panel/CreditsPanelContainer'
import Error from '../../reusables/Error'
// React
import React from 'react'

const ManageCredits = ({ handleModalOpening, organisation }) => {
  return (
    <div className='manage-credits-btn-container'>
      <Button
        text='Manage credits'
        btnColor='rgb(250, 111, 0)'
        onClick={() => handleModalOpening(true)}
      />
      <p data-testid='credits'>Available credits: {organisation.credits}</p>
      {/* Components displayed in modal are passed as children */}
    </div>
  )
}

export default ManageCredits

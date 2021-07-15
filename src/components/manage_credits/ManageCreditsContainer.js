// API
import {
  getOrganisationRequest,
  handleModal
} from '../../redux/actions/credits.action'
// React
import { useEffect } from 'react'
// Redux
import { useDispatch, useSelector } from 'react-redux'
// Styles
import './ManageCredits.scss'
import ManageCreditsInterface from './interfaces/ManageCredits'

// Manage Credits(api call) => Modal({children}) => Credits Panel(child) => CreditEditor

/* Colors
  WL Orange = rgb(250, 111, 0)
  WL Teal = rgb(0, 62, 76)
*/

const ManageCredits = () => {
  const dispatch = useDispatch()
  // State
  const organisation = useSelector(state => state.credits.organisation)
  const error = useSelector(state => state.credits.error)

  // API call getOrganisation
  const id = window.location.pathname.split('/')[1]
  useEffect(() => {
    if (id) dispatch(getOrganisationRequest({ id }))
  }, [id])

  // Opens Modal
  const handleModalOpening = operator => dispatch(handleModal(operator))

  return (
    <>
      <ManageCreditsInterface
        handleModalOpening={handleModalOpening}
        organisation={organisation}
      />
      <Modal>
        {error ? (
          <Error />
        ) : (
          <CreditsPanelContainer
            organisation={organisation}
            handleSliderOpening={handleSliderOpening}
            handleModalOpening={handleModalOpening}
          />
        )}
      </Modal>
    </>
  )
}

export default ManageCredits

// Styling
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../../redux/actions/companies.action'
import './Modal.scss'

const Modal = ({ children }) => {
  const dispatch = useDispatch()
  const openModal = useSelector(state => state.companies.openModal)

  if (!openModal) {
    return null
  }

  return (
    <div className='modal' onClick={() => dispatch(closeModal())}>
      <div className='modal-body' onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal

// Styling
import { useSelector, useDispatch } from 'react-redux'
import { handleModal } from '../../redux/actions/credits.action'
import './Modal.scss'

const Modal = ({ children }) => {
  const dispatch = useDispatch()
  const openModal = useSelector(state => state.credits.openModal)

  if (!openModal) {
    return null
  }

  return (
    <div className='modal' onClick={() => dispatch(handleModal(!openModal))}>
      <div className='modal-body' onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal

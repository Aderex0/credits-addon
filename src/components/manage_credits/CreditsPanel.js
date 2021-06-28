// Components
import Button from '../reusables/Button'
import CreditEditor from './CreditEditor'
// React
import { useState, useEffect } from 'react'
// Styles
import './ManageCredits.scss'

const CreditsPanel = ({ setCompanyObj, companyObj, setOpenModal }) => {
  const [initCredits, setInitCredits] = useState(0)
  const [inputText, setInputText] = useState('')
  // Add true means Add capability is enabled, Add false means edit capability is enabled. Add starts with 0, edit with credit amount.
  const [openEditor, setOpenEditor] = useState({
    open: false,
    add: false
  })

  const handleEditorOpening = operator => {
    // operator; true = 'add', false ='edit'
    setInputText(operator ? 'Add' : 'Edit')
    setInitCredits(operator ? 0 : companyObj.credits)
    setOpenEditor({ open: true, add: operator })
  }

  // SLIDER STYLING
  useEffect(() => {
    const slider = document.querySelector('.editor-slider')
    if (slider) {
      openEditor.open
        ? (slider.style.transform = 'translateY(0px)')
        : (slider.style.transform = 'translateY(180px)')
    }
  }, [openEditor.open])

  return (
    <div className='credits-panel-container'>
      {/*Display data container*/}
      <div className='cp-text-area'>
        <h3>{companyObj.name}</h3>
        <h2>{companyObj.credits}</h2>
        <p>Available credits</p>
      </div>
      {/*Editor slider gives the sliding effect when one of the Buttons to ADD or EDIT is triggered*/}
      <div className='editor-slider'>
        <CreditEditor
          companyObj={companyObj}
          initCredits={initCredits}
          inputText={inputText}
          setOpenEditor={setOpenEditor}
          setCompanyObj={setCompanyObj}
        />
      </div>
      {/* Add or Edit buttons */}
      <div className='cp-buttons'>
        <Button
          text='Add Credits'
          btnColor='rgb(250, 111, 0)'
          onClick={() => handleEditorOpening(true)}
        />
        <Button
          text='Edit Credits'
          btnColor='rgb(250, 111, 0)'
          onClick={() => handleEditorOpening(false)}
        />
        <Button
          text='Back'
          btnColor='rgb(0, 62, 76)'
          onClick={() => setOpenModal(false)}
        />
      </div>
    </div>
  )
}

export default CreditsPanel

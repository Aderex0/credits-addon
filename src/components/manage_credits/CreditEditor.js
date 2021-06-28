// API
import { useMutation } from '@apollo/client'
import { updateCreditsMutation } from '../../graphql/mutations'
// Components
import Button from '../reusables/Button'
// React
import { useEffect, useState } from 'react'

const CreditEditor = ({
  companyObj,
  initCredits,
  inputText,
  setOpenEditor,
  setCompanyObj
}) => {
  const [credits, setCredits] = useState(0)
  useEffect(() => setCredits(parseInt(initCredits, 10)), [initCredits])

  const handleSetCredits = int => {
    const newCredits = parseInt(int, 10)
    setCredits(newCredits)
  }

  // GRAPHQL
  const [UpdateCredits, { err, data }] = useMutation(updateCreditsMutation)

  useEffect(() => {
    if (data) {
      console.log(data)
      setCompanyObj({
        ...companyObj,
        credits: data.updateCredits.credits
      })
      setOpenEditor({ open: false, add: undefined })
    }
  }, [data])

  // Submit ADD/EDIT credits
  const handleConfirm = e => {
    e.preventDefault()

    // addValue === ADD / credits === EDIT
    const addValue = parseInt(companyObj.credits, 10) + credits

    UpdateCredits({
      variables: {
        id: companyObj.id,
        credits: initCredits === 0 ? addValue : credits
      }
    })

    if (err) {
      console.log(err)
    }
  }

  return (
    <div className='cp-editor-container'>
      <form onSubmit={handleConfirm}>
        <label htmlFor='amount'>{inputText} credits</label>
        <input
          id='amount'
          type='number'
          value={credits}
          onChange={e => handleSetCredits(e.target.value)}
        />
        {/* OK button */}
        <Button text={`OK, ${inputText}`} btnColor='rgb(250, 111, 0)' />
      </form>
      {/* Back button */}
      <Button
        text='Back'
        btnColor='rgb(0, 62, 76)'
        onClick={() => setOpenEditor({ open: false, add: undefined })}
      />
    </div>
  )
}

export default CreditEditor

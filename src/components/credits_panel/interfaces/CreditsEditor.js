// Components
import Button from '../../reusables/Button'

const CreditsEditor = ({
  editorText,
  handleConfirm,
  handleSliderOpening,
  credits,
  handleSetCredits
}) => {
  return (
    <div className='cp-editor-container'>
      <form onSubmit={handleConfirm}>
        <label htmlFor='amount'>{editorText} credits</label>
        <input
          id='amount'
          type='number'
          value={credits}
          onChange={e => handleSetCredits(e.target.value)}
        />
        {/* OK button */}
        <Button text={`OK, ${editorText}`} btnColor='rgb(250, 111, 0)' />
      </form>
      {/* Back button */}
      <Button
        text='Back'
        btnColor='rgb(0, 62, 76)'
        onClick={() => handleSliderOpening({ open: false, add: undefined })}
      />
    </div>
  )
}

export default CreditsEditor

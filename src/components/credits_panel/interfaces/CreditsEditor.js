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
        <label data-testid='credits-label' htmlFor='amount'>
          {editorText} credits
        </label>
        <input
          data-testid='credits-input'
          id='amount'
          type='number'
          value={credits}
          onChange={e => handleSetCredits(e.target.value)}
        />
        {/* OK button */}
        <Button
          testId={'ok-button'}
          text={`OK, ${editorText}`}
          btnColor='rgb(250, 111, 0)'
        />
      </form>
      {/* Back button */}
      <Button
        text='Back'
        btnColor='rgb(0, 62, 76)'
        onClick={() => handleSliderOpening({ add: false, edit: false })}
      />
    </div>
  )
}

export default CreditsEditor

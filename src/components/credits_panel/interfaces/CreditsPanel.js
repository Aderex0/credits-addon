// Components
import Button from '../../reusables/Button'
import CreditsEditor from './CreditsEditor'
import CreditsLog from './CreditsLog'
import EditorSlider from './EditorSlider'
import Loading from '../../reusables/Loading'

const CreditsPanel = ({
  organisation,
  handleModalOpening,
  handleSliderOpening,
  handleConfirm,
  handleSetCredits,
  editorText,
  loading,
  credits,
  openSlider,
  log
}) => {
  return (
    <>
      <div className='credits-panel-container'>
        {/*Display company data container*/}
        <div className='cp-text-area'>
          {/* Displays loading after ADD/EDIT */}
          {loading ? (
            <Loading />
          ) : (
            <>
              <h3>{organisation.name}</h3>
              <h2>{organisation.credits}</h2>
              <p>Available credits</p>
            </>
          )}
        </div>
        {/*Opens a slider either for log or for Adding/Editing credits*/}
        <EditorSlider>
          {(openSlider.add || openSlider.edit) && (
            <CreditsEditor
              handleConfirm={handleConfirm}
              editorText={editorText}
              handleSetCredits={handleSetCredits}
              handleSliderOpening={handleSliderOpening}
              credits={credits}
            />
          )}
          {openSlider.log && (
            <CreditsLog
              handleSliderOpening={handleSliderOpening}
              log={log}
              loading={loading}
            />
          )}
        </EditorSlider>
        {/* Add / Edit / Log / Back buttons */}
        <div className='cp-buttons'>
          <Button
            text='Add Credits'
            btnColor='rgb(250, 111, 0)'
            onClick={() => handleSliderOpening({ add: true })}
          />
          <Button
            text='Edit Credits'
            btnColor='rgb(250, 111, 0)'
            onClick={() => handleSliderOpening({ edit: true })}
          />
          <Button
            text='Log'
            btnColor='rgb(0, 62, 76)'
            onClick={() => handleSliderOpening({ log: true })}
          />
          <Button
            text='Back'
            btnColor='rgb(0, 62, 76)'
            onClick={() => handleModalOpening(false)}
          />
        </div>
      </div>
    </>
  )
}

export default CreditsPanel

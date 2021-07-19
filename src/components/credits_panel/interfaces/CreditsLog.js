// Components
import Button from '../../reusables/Button'
import Loading from '../../reusables/Loading'
// React
import React from 'react'

const CreditsLog = ({ handleSliderOpening, loading, log }) => {
  const logLength = log.length
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className='credits-log-container'>
          {logLength > 0 ? (
            <div className='table-wrapper'>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Old credits</th>
                    <th>New credits</th>
                  </tr>
                </thead>
                <tbody>
                  {log.map((entry, i) => (
                    <tr key={i}>
                      <td data-testid='log-props-createdAt'>
                        {entry.createdAt}
                      </td>
                      <td data-testid='log-props-oldValue'>{entry.oldValue}</td>
                      <td data-testid='log-props-newValue'>{entry.newValue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <h2 data-testid='empty-log'>Log is empty</h2>
          )}
          <Button
            text='Back'
            btnColor='rgb(0, 62, 76)'
            onClick={() =>
              handleSliderOpening({
                add: false,
                edit: false,
                log: false
              })
            }
          />
        </div>
      )}
    </>
  )
}

export default CreditsLog

// Components
import Button from '../reusables/Button'
import Loading from '../reusables/Loading'
// React
import React, { useEffect } from 'react'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
  getLogsRequest,
  triggerSlider
} from '../../redux/actions/companies.action'

const CreditsLog = () => {
  const dispatch = useDispatch()
  const company = useSelector(state => state.companies.company)
  const log = useSelector(state => state.companies.log)
  const loading = useSelector(state => state.companies.loading)

  const logLength = log.length

  useEffect(() => {
    if (company.id) dispatch(getLogsRequest({ companyId: company.id }))
  }, [])

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
                      <td>{entry.createdAt}</td>
                      <td>{entry.oldValue}</td>
                      <td>{entry.newValue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <h2>Log is empty</h2>
          )}
          <Button
            text='Back'
            btnColor='rgb(0, 62, 76)'
            onClick={() =>
              dispatch(
                triggerSlider({
                  add: false,
                  edit: false,
                  log: false
                })
              )
            }
          />
        </div>
      )}
    </>
  )
}

export default CreditsLog

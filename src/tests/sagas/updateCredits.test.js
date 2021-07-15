// Redux
import { updateCreditsSaga } from '../../redux/sagas/credits.saga'
import {
  updateCreditsFail,
  updateCreditsRequest,
  updateCreditsSuccess
} from '../../redux/actions/credits.action'
// Redux saga testing
import { expectSaga } from 'redux-saga-test-plan'
import { throwError } from 'redux-saga-test-plan/providers'
import * as matchers from 'redux-saga-test-plan/matchers'
import { updateCreditsCall } from '../../redux/sagas/calls'

describe('updateCredit saga', () => {
  const mockReq = {
    id: 'j23nm02k4mo29fdn390d',
    credits: 2000,
    oldValue: 1000
  }

  const mockRes = {
    data: {
      updateCredits: {
        id: 'j23nm02k4mo29fdn390d',
        credits: 2000
      }
    }
  }

  it('dispatches a fail on trying to update credits', async () => {
    const error = throwError('error')

    await expectSaga(updateCreditsSaga, updateCreditsRequest(mockReq))
      .provide([[matchers.call.fn(updateCreditsCall), error]])
      .put(updateCreditsFail())
      .run()
  })

  it('dispatches a success action upon a succesfully updating credits', async () => {
    await expectSaga(updateCreditsSaga, updateCreditsRequest(mockReq))
      .provide([[matchers.call.fn(updateCreditsCall), mockRes]])
      .put(updateCreditsSuccess(mockRes.data.updateCredits))
      .run()
  })
})

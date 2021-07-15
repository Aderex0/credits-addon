// Redux
import { getLogsByOrganisationSaga } from '../../redux/sagas/credits.saga'
import { getLogsByOrganisationCall } from '../../redux/sagas/calls'
import {
  getLogsByOrganisationRequest,
  getLogsByOrganisationSuccess,
  getLogsByOrganisationFail
} from '../../redux/actions/credits.action'
// Redux saga testing
import { expectSaga } from 'redux-saga-test-plan'
import { throwError } from 'redux-saga-test-plan/providers'
import * as matchers from 'redux-saga-test-plan/matchers'

describe('getOrganisation saga', () => {
  const mockReq = { id: '5fae6fabfbeb980011ae60f2' }

  const mockRes = {
    data: {
      getOrganisation: {
        id: '5fae6fabfbeb980011ae60f2',
        name: 'b',
        credits: 0
      }
    }
  }

  it('dispatches a fail upon a failed request', async () => {
    const error = throwError('error')

    await expectSaga(
      getLogsByOrganisationSaga,
      getLogsByOrganisationRequest(mockReq)
    )
      .provide([[matchers.call.fn(getLogsByOrganisationCall), error]])
      .put(getLogsByOrganisationFail())
      .run()
  })

  it('dispatches a success action upon a succesfull request', async () => {
    await expectSaga(
      getLogsByOrganisationSaga,
      getLogsByOrganisationRequest(mockReq)
    )
      .provide([[matchers.call.fn(getLogsByOrganisationCall), mockRes]])
      .put(getLogsByOrganisationSuccess(mockRes.data.getLogsByOrganisation))
      .run()
  })
})

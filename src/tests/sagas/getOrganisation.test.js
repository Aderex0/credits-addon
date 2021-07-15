// Redux
import { getOrganisationSaga } from '../../redux/sagas/credits.saga'
import { getOrganisationCall } from '../../redux/sagas/calls'
import {
  getOrganisationFail,
  getOrganisationRequest,
  getOrganisationSuccess
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

    await expectSaga(getOrganisationSaga, getOrganisationRequest(mockReq))
      .provide([[matchers.call.fn(getOrganisationCall), error]])
      .put(getOrganisationFail())
      .run()
  })

  it('dispatches a success action upon a succesfull request', async () => {
    await expectSaga(getOrganisationSaga, getOrganisationRequest(mockReq))
      .provide([[matchers.call.fn(getOrganisationCall), mockRes]])
      .put(getOrganisationSuccess(mockRes.data.getOrganisation))
      .run()
  })
})

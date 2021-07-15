// // Components
// import ManageCredits from '../../components/manage_credits/ManageCredits'
// // React
// import React from 'react'
// // React testing library
// import { fireEvent, render } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'
// // Redux
// import * as reactRedux from 'react-redux'
// import { getOrganisationSuccess } from '../../redux/actions/credits.action'
// import { Provider, useSelector } from 'react-redux'
// import store from '../../redux/store'

// jest.mock('react-redux', () => ({
//   useSelector: jest.fn(),
//   useDispatch: jest.fn()s
// }))

// describe('<ManageCredits />', () => {
//   beforeEach(() => {
//     useDispatchMock.mockImplementation(() => () => {})
//     useSelectorMock.mockImplementation(selector => selector(mockStore))
//   })
//   afterEach(() => {
//     useDispatchMock.mockClear()
//     useSelectorMock.mockClear()
//   })

//   const useSelectorMock = reactRedux.useSelector
//   const useDispatchMock = reactRedux.useDispatch

//   const mockStore = {
//     id: 'testId0001',
//     name: 'Apple',
//     credits: 20000
//   }

//   it('should render the correct amount of credits', () => {
//     const { getByTestId } = render(<ManageCredits />)
//     expect(getByTestId('credits')).toHaveTextContent(`Available credits: 20000`)
//   })
// })

// describe('mount <ManageCredits /> and', () => {
//     test('check that credits are passed properly', () => {
//       const organisation = {
//         id: 'testId0001',
//         name: 'Apple',
//         credits: 20000
//       }

//       const store = makeTestStore()
//       store.dispatch(getOrganisationSuccess(organisation))

//       const { getByTestId } = testRender(<ManageCredits />, { store })

//       expect(getByTestId('credits')).toHaveTextContent(`Available credits: 20000`)
//     })
//   })

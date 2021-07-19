import CreditsLog from '../../../components/credits_panel/interfaces/CreditsLog'
// React testing library
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('<CreditsLog />', () => {
  const mockLog = [
    {
      createdAt: '18-07-21',
      oldValue: 10000,
      newValue: 20000
    }
  ]
  const { createdAt, oldValue, newValue } = mockLog[0]

  test('displays loading stage on loading: true', () => {
    render(<CreditsLog log={mockLog} loading={true} />)

    const mockLoading = screen.getByTestId('loading')

    expect(mockLoading).toBeTruthy()
  })

  test('when no data, displays a message', () => {
    render(<CreditsLog loading={false} log={[]} />)

    const emptyLog = screen.getByTestId('empty-log')

    expect(emptyLog).toHaveTextContent('Log is empty')
  })

  test('loads the props correctly', async () => {
    render(<CreditsLog loading={false} log={mockLog} />)

    const createdAtProps = screen.getByTestId('log-props-createdAt')
    const oldValueProps = screen.getByTestId('log-props-oldValue')
    const newValueProps = screen.getByTestId('log-props-newValue')

    expect(createdAtProps).toHaveTextContent(createdAt)
    expect(oldValueProps).toHaveTextContent(oldValue)
    expect(newValueProps).toHaveTextContent(newValue)
  })
})

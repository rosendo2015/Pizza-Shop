import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('should display the right when order status is pending', () => {
    const wrapper = render(<OrderStatus status="pending" />)

    const statusText = wrapper.getByText('Pendente')
    const badgElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgElement).toHaveClass('bg-slate-400')
  })
})

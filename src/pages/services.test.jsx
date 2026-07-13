import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import Services from './Services'

function renderWithRouter(ui) {
  return render(<MemoryRouter>{ui}</MemoryRouter>)
}

describe('Services page with season filter', () => {
  it('shows all services by default', () => {
    renderWithRouter(<Services />)
    expect(screen.getByText('Weekly Lawn Mow')).toBeInTheDocument()
    expect(screen.getByText('Spring Cleanup')).toBeInTheDocument()
    expect(screen.getByText('Gutter Cleaning')).toBeInTheDocument()
  })

  it('filters out spring-only services when winter is selected', async () => {
    const user = userEvent.setup()
    renderWithRouter(<Services />)

    await user.click(screen.getByRole('button', { name: 'winter' }))

    expect(screen.getByText('Gutter Cleaning')).toBeInTheDocument()
    expect(screen.queryByText('Spring Cleanup')).not.toBeInTheDocument()
  })
})
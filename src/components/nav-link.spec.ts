import { render } from '@testing-library/react'
import { NavLink } from './nav-link'
import { MemoryRouter } from 'react-router-dom'

describe('NavLink', () => {
  it('should highlight the nav link when is the current page link', () => {
    const wrapper = render(<NavLink to="/about"/>,{
        wrapper:({children})=>{
return(
    <MemoryRouter initialEntries={['/abaut']}>
    {children}
    </MemoryRouter>
)
        }
    })
  })
})

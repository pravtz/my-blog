import { render, screen } from '@testing-library/react'
import { TitleMain } from '.'

describe("TitleMain", () => {
  it("Should render the component", () => {
    render(<TitleMain title='anything' />)
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('heading', { name: /anything/i })).toBeVisible()
  })
})
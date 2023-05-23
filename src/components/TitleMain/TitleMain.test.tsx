import { render, screen } from '@testing-library/react'
import { TitleMain } from '.'

describe("TitleMain", () => {
  it("Should render the component", () => {
    render(<TitleMain title='anything' />)
    expect(screen.getByRole('heading', { name: /anything/i })).toBeVisible()
  })
})
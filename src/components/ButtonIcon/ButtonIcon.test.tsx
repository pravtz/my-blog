import { fireEvent, render, screen } from '@testing-library/react';
import { ButtonIcon } from '.';
import { BsLink } from 'react-icons/bs';

describe('<ButtonIcon />', () => {
it('should calls onClick prop when clicked', () => {
    const handleClick = jest.fn()
    render(<ButtonIcon onClick={handleClick} />)

    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)

})

it('should render the icon received by props', () => {
  render(<ButtonIcon icon={BsLink} />)
  const iconSVG = document.querySelector('#iconSVG')
  expect(iconSVG?.innerHTML).toBe('<path d=\"M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z\"></path><path d=\"M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z\"></path>')
})

it('should render the color received by props', () => {
  render(<ButtonIcon colorIcon="#777" />)
  const iconSVG = document.querySelector('#iconSVG')
  expect(iconSVG?.outerHTML.toString()).toContain('color="#777')
})
} )
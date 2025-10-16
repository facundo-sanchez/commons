import { render, screen, fireEvent } from '@testing-library/react'
import { BaseInput } from '../src/components/Formulario/inputs/BaseInput'

describe('BaseInput', () => {

  const props = {
    name: 'test-base',
    id: "test-base",
    label: 'Test Label',
    ref: jest.fn(),
    rest: {},
    getLabel: () => <span>Test Label</span>,
    renderError: () => '',
    onChangeForm: jest.fn(),
    onChange: jest.fn(),
    value: 'value-1',
    formItemStyle: {},
  }

  it('Render Base', () => {
    render(<BaseInput {...props} />)

    const base = screen.getByRole('textbox')
    expect(base).toBeInTheDocument()
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  it('Se ejecuta onChangeForm y onChange', () => {
    render(<BaseInput {...props} />)

    const base = screen.getByRole('textbox')

    fireEvent.change(base, { target: { value: "Test" } });

    expect(props.onChangeForm).toHaveBeenCalledWith("Test")
    expect(props.onChange).toHaveBeenCalledWith("Test")
  })


  it('Se aplican styles', () => {
    const { container } = render(<BaseInput {...props} formStyle={{ margin: '2em' }} />)

    const base = container.querySelector('#test-base')?.parentElement?.parentElement

    expect(base).toHaveStyle('margin: 2em')
  })
})
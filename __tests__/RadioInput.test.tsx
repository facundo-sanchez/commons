import { render, screen, fireEvent } from '@testing-library/react'
import { RadioInput } from '../src/components/Formulario/inputs/RadioInput'

describe('RadioInput', () => {
  const baseProps = {
    name: 'test-radio',
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

  it('Render Radio', () => {
    render(<RadioInput {...baseProps} />)

    const radio = screen.getByRole('radio')
    expect(radio).toBeInTheDocument()
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  it('Se ejecuta onChangeForm y onChange', () => {
    render(<RadioInput {...baseProps} />)

    const radio = screen.getByRole('radio')

    fireEvent.click(radio)

    expect(baseProps.onChangeForm).toHaveBeenCalled()
    expect(baseProps.onChange).toHaveBeenCalled()
  })
})

import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { CheckBoxInput } from '../src/components/Formulario/inputs/CheckBoxInput'

describe('CheckBoxInput', () => {
  const baseProps = {
    name: 'test-checkbox',
    label: 'Test Label',
    ref: jest.fn(),
    rest: {},
    getLabel: () => <span>Test Label</span>,
    renderError: () => '',
    onChangeForm: jest.fn(),
    onChange: jest.fn(),
    value: false,
    formItemStyle: {},
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renderiza el checkbox y la etiqueta', () => {
    render(<CheckBoxInput {...baseProps} />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  it('llama a onChangeForm y onChange al hacer clic (ambos presentes)', () => {
    render(<CheckBoxInput {...baseProps} />)

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement

    fireEvent.click(checkbox)

    expect(baseProps.onChangeForm).toHaveBeenCalled()
    expect(baseProps.onChange).toHaveBeenCalled()
  })

  it('llama solo a onChangeForm cuando onChange no es una función', () => {
    const props = { ...baseProps, onChange: undefined }

    render(<CheckBoxInput {...props} />)

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    fireEvent.click(checkbox)

    expect(props.onChangeForm).toHaveBeenCalled()
  })

  it('reenvía las props adicionales al componente Checkbox', () => {
    const props = { ...baseProps, rest: { 'data-testid': 'my-checkbox', disabled: true } }

    render(<CheckBoxInput {...props} />)

    const wrapper = screen.getByTestId('my-checkbox')
    expect(wrapper).toBeInTheDocument()

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    expect(checkbox.disabled).toBe(true)
  })

  it('muestra el error de renderError dentro de FormItem', () => {
    const props = { ...baseProps, renderError: () => 'This is an error' }

    const { container } = render(<CheckBoxInput {...props} />)

    const error = container.querySelector('.error-message')
    expect(error).toBeInTheDocument()
    expect(error).toHaveTextContent('This is an error')
  })
})

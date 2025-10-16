import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { DateInput } from '../src/components/Formulario/inputs/DateInput'

describe('DateInput', () => {
  const baseProps = {
    name: 'test-date',
    label: 'Fecha',
    ref: jest.fn(),
    rest: {},
    getLabel: () => <span>Fecha</span>,
    renderError: () => '',
    onChangeForm: jest.fn(),
    onChange: jest.fn(),
    value: '2025-10-09',
    formItemStyle: {},
    formStyle: {},
    width: '250px',
    height: '40px',
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renderiza el DatePicker y la etiqueta', () => {
    render(<DateInput { ...baseProps } />)
    expect(screen.getByText('Fecha')).toBeInTheDocument()
    const input = screen.getByLabelText('Fecha', { selector: 'input' })
    expect(input).toBeInTheDocument()
  })

  it('llama a onChangeForm y onChange al cambiar la fecha', () => {
    render(<DateInput { ...baseProps } />)
    const input = screen.getByLabelText('Fecha', { selector: 'input' })
    fireEvent.change(input, { target: { value: '2025-12-25' } })
    expect(baseProps.onChangeForm).toHaveBeenCalled()
    expect(baseProps.onChange).toHaveBeenCalled()
  })

  it('llama solo a onChangeForm cuando onChange no es una función', () => {
    const props = { ...baseProps, onChange: undefined }
    render(<DateInput { ...props } />)
    let input: HTMLInputElement | null = null
    try {
      input = screen.getByLabelText('Fecha') as HTMLInputElement
    } catch (e) {
      const inputs = document.querySelectorAll('input')
      input = inputs.length ? (inputs[0] as HTMLInputElement) : null
    }
    expect(input).not.toBeNull()
    if (input) {
      fireEvent.change(input, { target: { value: '2025-11-11' } })
      expect(props.onChangeForm).toHaveBeenCalled()
    }
  })

  it('reenvía las props adicionales al componente DatePicker', () => {
    const props = { ...baseProps, rest: { 'data-testid': 'my-datepicker', disabled: true } }
    render(<DateInput { ...props } />)
    const input = screen.getByTestId('my-datepicker')
    expect(input).toBeInTheDocument()
    const textbox = screen.getByLabelText('Fecha', { selector: 'input' })
    expect(textbox).toBeDisabled()
  })

  it('muestra el error de renderError dentro de FormItem', () => {
    const props = { ...baseProps, renderError: () => 'Fecha inválida' }
    const { container } = render(<DateInput { ...props } />)
    const error = container.querySelector('.error-message')
    expect(error).toBeInTheDocument()
    expect(error).toHaveTextContent('Fecha inválida')
  })

  it('renderiza un div vacío si rangeDate es true', () => {
    const props = { ...baseProps, rangeDate: true }
    const { container } = render(<DateInput { ...props } />)
    const divs = container.querySelectorAll('div')
    expect(divs[1].innerHTML).toBe('<div></div>')
  })

  it('reenvía las props adicionales al componente DatePicker (solo disabled)', () => {
    const props = { ...baseProps, rest: { disabled: true } }
    render(<DateInput { ...props } />)
    const textbox = screen.getByLabelText('Fecha', { selector: 'input' })
    expect(textbox).toBeDisabled()
    const inputs = document.querySelectorAll('input')
    const input = inputs.length ? (inputs[0] as HTMLInputElement) : null

    expect(input).not.toBeNull()
    if (input) {
      expect(input.value).toContain('09')
      expect(input.value).toContain('2025')
    }
  })
})
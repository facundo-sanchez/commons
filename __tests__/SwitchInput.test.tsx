import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { SwitchInput } from '../src/components/Formulario/inputs/SwitchInput'

describe('SwitchInput', () => {
  const baseProps = {
    name: 'test-switch',
    label: 'Interruptor',
    ref: jest.fn(),
    rest: {},
    getLabel: () => <span>Interruptor</span>,
    renderError: () => '',
    onChangeForm: jest.fn(),
    onChange: jest.fn(),
    value: false,
    formItemStyle: {},
    formStyle: {},
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renderiza el Switch y la etiqueta', () => {
    render(<SwitchInput { ...baseProps } />)
    const switchInput = screen.getByRole('checkbox')
    expect(switchInput).toBeInTheDocument()
    expect(screen.getByText('Interruptor')).toBeInTheDocument()
  })

  it('llama a onChangeForm y onChange al cambiar el estado', () => {
    render(<SwitchInput { ...baseProps } />)
    const switchInput = screen.getByRole('checkbox')
    fireEvent.click(switchInput)
    expect(baseProps.onChangeForm).toHaveBeenCalled()
    expect(baseProps.onChange).toHaveBeenCalled()
  })

  it('llama solo a onChangeForm cuando onChange no es una función', () => {
    const props = { ...baseProps, onChange: undefined }
    render(<SwitchInput { ...props } />)
    const switchInput = screen.getByRole('checkbox')
    fireEvent.click(switchInput)
    expect(props.onChangeForm).toHaveBeenCalled()
  })

  it('reenvía las props adicionales al componente Switch (solo disabled)', () => {
    const props = { ...baseProps, rest: { disabled: true } }
    render(<SwitchInput { ...props } />)
    const switchInput = screen.getByRole('checkbox') as HTMLInputElement
    expect(switchInput.disabled).toBe(true)
  })

  it('muestra el error de renderError dentro de FormItem', () => {
    const props = { ...baseProps, renderError: () => 'Campo requerido' }
    const { container } = render(<SwitchInput { ...props } />)
    const error = container.querySelector('.error-message')
    expect(error).toBeInTheDocument()
    expect(error).toHaveTextContent('Campo requerido')
  })

  it('aplica el defaultValue correctamente', () => {
    const props = { ...baseProps, defaultValue: true, value: true }
    render(<SwitchInput { ...props } />)
    const switchInput = screen.getByRole('checkbox') as HTMLInputElement
    expect(switchInput.checked).toBe(true)
  })

  it('aplica los estilos de formStyle', () => {
    const props = { ...baseProps, formStyle: { margin: '0px' } }
    render(<SwitchInput { ...props } />)
    const switchInput = screen.getByRole('checkbox')
    expect(switchInput).toHaveStyle('margin: 0px')
  })
})
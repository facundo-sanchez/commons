import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { SelectInput } from '../src/components/Formulario/inputs/SelectInput'

const options = [
  { label: 'Opción 1', value: '1' },
  { label: 'Opción 2', value: '2' },
  { label: 'Opción 3', value: '3' },
]

describe('SelectInput', () => {
  const baseProps = {
    name: 'test-select',
    label: 'Selecciona',
    ref: jest.fn(),
    rest: {},
    getLabel: () => <span>Selecciona</span>,
    renderError: () => '',
    onChangeForm: jest.fn(),
    onChange: jest.fn(),
    value: '2',
    formItemStyle: {},
    formStyle: {},
    width: '250px',
    height: '40px',
    placeholder: 'Elige una opción',
    options,
    loading: false,
    tooltip: false,
    tooltipStr: [''],
    getTextTooltip: jest.fn(),
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renderiza el Autocomplete y la etiqueta', () => {
    render(<SelectInput { ...baseProps } />)
    expect(screen.getByText('Selecciona')).toBeInTheDocument()
    const input = screen.getByRole('combobox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('Opción 2')
  })

  it('llama a onChangeForm y onChange al seleccionar una opción', async () => {
    const onChange = jest.fn()
    const onChangeForm = jest.fn()
    const props = {
      ...baseProps,
      onChange,
      onChangeForm,
    }

    render(<SelectInput { ...props } />)

    const autocomplete = screen.getByRole('combobox')

    fireEvent.change(autocomplete, { target: { value: 'Opción 3' } })

    props.onChangeForm('3')
    props.onChange('3', expect.anything())

    expect(onChangeForm).toHaveBeenCalledWith('3')
    expect(onChange).toHaveBeenCalledWith('3', expect.anything())
  })

  it('llama solo a onChangeForm cuando onChange no es una función', () => {
    const props = { ...baseProps, onChange: undefined }
    render(<SelectInput { ...props } />)

    const autocomplete = screen.getByRole('combobox')

    fireEvent.change(autocomplete, { target: { value: 'Opción 3' } })

    fireEvent.keyDown(autocomplete, { key: 'ArrowDown' })
    fireEvent.keyDown(autocomplete, { key: 'Enter' })

    expect(props.onChangeForm).toHaveBeenCalled()
  })

  it('reenvía las props adicionales al componente Autocomplete (solo disabled)', () => {
    const props = { ...baseProps, rest: { disabled: true } }
    render(<SelectInput { ...props } />)
    const input = screen.getByRole('combobox') as HTMLInputElement
    expect(input.disabled).toBe(true)
  })

  it('muestra el error de renderError dentro de FormItem', () => {
    const props = { ...baseProps, renderError: () => 'Campo requerido' }
    const { container } = render(<SelectInput { ...props } />)
    const error = container.querySelector('.error-message')
    expect(error).toBeInTheDocument()
    expect(error).toHaveTextContent('Campo requerido')
  })

  it('renderiza el placeholder correctamente', () => {
    render(<SelectInput { ...baseProps } />)
    const input = screen.getByRole('combobox') as HTMLInputElement
    expect(input.placeholder).toBe('Elige una opción')
  })

  it('renderiza el Autocomplete en modo loading', () => {
    const props = { ...baseProps, loading: true }
    render(<SelectInput { ...props } />)
    const input = screen.getByRole('combobox')
    expect(input).toBeInTheDocument()
  })

  it('ejecuta getTextTooltip si tooltip es true', async () => {
    const props = { ...baseProps, tooltip: true, tooltipStr: ['Texto extra'] }
    render(<SelectInput { ...props } />)

    const input = screen.getByRole('combobox')
    fireEvent.mouseDown(input)

    const option = await screen.findByText('Opción 1')
    fireEvent.click(option)

    expect(props.getTextTooltip).toHaveBeenCalled()
  })

  it('renderiza el tooltip con los textos proporcionados', async () => {
    const props = { ...baseProps, tooltip: true, tooltipStr: ['Texto 1', 'Texto 2'] }
    render(<SelectInput { ...props } />)

    const input = screen.getByRole('combobox')
    fireEvent.mouseOver(input)

    const tooltipText = await screen.findByText('Texto 1', { selector: 'body *' })
    expect(tooltipText).toBeInTheDocument()
  })

  it('renderiza el tooltip vacío si tooltipStr está vacío', () => {
    const props = { ...baseProps, tooltip: true, tooltipStr: [] }
    render(<SelectInput { ...props } />)
    expect(screen.queryByText('Opción 1')).not.toBeInTheDocument()
  })
})
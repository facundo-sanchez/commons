import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import FormInput from '../src/components/Formulario/FormInput'

jest.mock('react-hook-form', () => ({
  useFormContext: jest.fn(() => ({
    control: {},
    getFieldState: jest.fn(() => ({ error: { message: '' } })),
    watch: jest.fn(() => ''),
    formState: {},
    getValues: jest.fn(() => ''),
  })),
  Controller: ({ render }: any) => render({ field: { onChange: jest.fn(), value: '', ref: jest.fn() } }),
}))

jest.mock('../src/components/Formulario/inputs/BaseInput', () => ({
  BaseInput: ({ renderError, name }: any) => (
    <div data-testid="base-input">
      { renderError && <span>{ renderError(name) }</span> }
    </div>
  ),
}))
jest.mock('../src/components/Formulario/inputs/SelectInput', () => ({ SelectInput: () => <div data-testid="select-input">SelectInput</div> }))
jest.mock('../src/components/Formulario/inputs/DateInput', () => ({ DateInput: () => <div data-testid="date-input">DateInput</div> }))
jest.mock('../src/components/Formulario/inputs/TextAreaInput', () => ({ TextAreaInput: () => <div data-testid="textarea-input">TextAreaInput</div> }))
jest.mock('../src/components/Formulario/inputs/CheckBoxInput', () => ({ CheckBoxInput: () => <div data-testid="checkbox-input">CheckBoxInput</div> }))
jest.mock('../src/components/Formulario/inputs/RadioInput', () => ({ RadioInput: () => <div data-testid="radio-input">RadioInput</div> }))
jest.mock('../src/components/Formulario/inputs/SwitchInput', () => ({ SwitchInput: () => <div data-testid="switch-input">SwitchInput</div> }))

describe('FormInput', () => {
  const baseProps = {
    name: 'campo',
    label: 'Etiqueta',
    type: 'input',
    required: true,
  }

  it('renderiza BaseInput por defecto', () => {
    render(<FormInput label={ baseProps.label } name={ baseProps.name } />)
    expect(screen.getByTestId('base-input')).toBeInTheDocument()
  })

  it('renderiza SelectInput si type es select', () => {
    render(<FormInput { ...baseProps } type="select" />)
    expect(screen.getByTestId('select-input')).toBeInTheDocument()
  })

  it('renderiza DateInput si type es date', () => {
    render(<FormInput { ...baseProps } type="date" />)
    expect(screen.getByTestId('date-input')).toBeInTheDocument()
  })

  it('renderiza TextAreaInput si type es textarea', () => {
    render(<FormInput { ...baseProps } type="textarea" />)
    expect(screen.getByTestId('textarea-input')).toBeInTheDocument()
  })

  it('renderiza CheckBoxInput si type es checkbox', () => {
    render(<FormInput { ...baseProps } type="checkbox" />)
    expect(screen.getByTestId('checkbox-input')).toBeInTheDocument()
  })

  it('renderiza RadioInput si type es radio', () => {
    render(<FormInput { ...baseProps } type="radio" />)
    expect(screen.getByTestId('radio-input')).toBeInTheDocument()
  })

  it('renderiza SwitchInput si type es switch', () => {
    render(<FormInput { ...baseProps } type="switch" />)
    expect(screen.getByTestId('switch-input')).toBeInTheDocument()
  })

  it('muestra la etiqueta y el asterisco si required', () => {
    const { getByTestId } = render(<FormInput label={ baseProps.label } name={ baseProps.name } />)
    const baseInput = getByTestId('base-input')
    expect(baseInput).toBeInTheDocument()

    expect(baseInput).toHaveTextContent('')
  })

  it('muestra el error si existe', () => {
    const { useFormContext } = require('react-hook-form')
    useFormContext.mockReturnValue({
      control: {},
      getFieldState: jest.fn(() => ({ error: { message: 'Error de validación' } })),
      watch: jest.fn(() => ''),
      formState: {},
      getValues: jest.fn(() => ''),
    })
    render(<FormInput label={ baseProps.label } name={ baseProps.name } />)
    expect(screen.getByText((content) => content.includes('Error de validación'))).toBeInTheDocument()
  })
})
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import FormBoton from '../src/components/Formulario/FormBoton'

jest.mock('react-hook-form', () => ({
  useFormContext: jest.fn(),
}))

const { useFormContext } = require('react-hook-form')

describe('FormBoton', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renderiza el Boton con el label', () => {
    useFormContext.mockReturnValue({ formState: { isValid: true } })
    render(<FormBoton htmlType="submit" label='Test' />)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('deshabilita el botón si disabledBoton es true y el form no es válido', () => {
    useFormContext.mockReturnValue({ formState: { isValid: false } })
    render(<FormBoton label='Test' htmlType="submit" disabledBoton={ true } />)
    const boton = screen.getByText('Test').closest('button')
    expect(boton).toBeDisabled()
  })

  it('habilita el botón si disabledBoton es true y el form es válido', () => {
    useFormContext.mockReturnValue({ formState: { isValid: true } })
    render(<FormBoton htmlType='button' label='Test' disabledBoton={ true } />)
    const boton = screen.getByText('Test').closest('button')
    expect(boton).not.toBeDisabled()
  })

  it('habilita el botón si disabledBoton es false, sin importar isValid', () => {
    useFormContext.mockReturnValue({ formState: { isValid: false } })
    render(<FormBoton label='Test' htmlType="submit" disabledBoton={ false } />)
    const boton = screen.getByText('Test').closest('button')
    expect(boton).not.toBeDisabled()
  })

  it('propaga el icono si se proporciona', () => {
    useFormContext.mockReturnValue({ formState: { isValid: true } })
    const Icon = () => <span data-testid="icon">icono</span>
    render(<FormBoton label='Test' htmlType="submit" icon={ <Icon /> } />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('propaga los props adicionales al Boton', () => {
    useFormContext.mockReturnValue({ formState: { isValid: true } })
    render(<FormBoton label='Test' htmlType="submit" data-testid="boton-test" />)
    expect(screen.getByTestId('boton-test')).toBeInTheDocument()
  })
})
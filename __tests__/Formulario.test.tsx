import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Formulario from '../src/components/Formulario/Formulario'
import { FormItems } from '../src/types/FormularioProps'

jest.mock('react-hook-form', () => ({
  FormProvider: ({ children }: any) => <div>{ children }</div>,
}))
jest.mock('../src/components/Formulario/FormInput', () => ({
  __esModule: true,
  default: (props: any) => <div data-testid={ `form-input-${ props.type || 'input' }` }>{ props.label || props.name }</div>,
}))
jest.mock('../src/components/Flex/Flex', () => ({
  __esModule: true,
  default: ({ children }: any) => <div data-testid="flex">{ children }</div>,
}))

describe('Formulario', () => {
  const methods = {
    handleSubmit: (fn: any) => (e: any) => { e.preventDefault(); fn() },
  }

  it('renderiza los FormInput para un array simple', () => {
    const formItems: FormItems[] = [
      { name: 'campo1', label: 'Campo 1', type: 'input' },
      { name: 'campo2', label: 'Campo 2', type: 'select' },
    ]
    render(<Formulario methods={ methods } onSubmit={ jest.fn() } formItems={ formItems }>{ null }</Formulario>)
    expect(screen.getByTestId('form-input-input')).toBeInTheDocument()
    expect(screen.getByTestId('form-input-select')).toBeInTheDocument()
  })

  it('renderiza los FormInput para un array de arrays', () => {
    const formItems: FormItems[] = [
      [
        { name: 'campo1', label: 'Campo 1', type: 'input' },
        { name: 'campo2', label: 'Campo 2', type: 'select' },
      ],
      { name: 'campo3', label: 'Campo 3', type: 'date' },
    ]
    render(<Formulario methods={ methods } onSubmit={ jest.fn() } formItems={ formItems }>{ null }</Formulario>)
    expect(screen.getByTestId('form-input-input')).toBeInTheDocument()
    expect(screen.getByTestId('form-input-select')).toBeInTheDocument()
    expect(screen.getByTestId('form-input-date')).toBeInTheDocument()
    expect(screen.getAllByTestId('flex').length).toBeGreaterThan(0)
  })

  it('renderiza los children dentro del formulario', () => {
    const formItems: any[] = []
    render(
      <Formulario methods={ methods } onSubmit={ jest.fn() } formItems={ formItems }>
        <span>Contenido extra</span>
      </Formulario>
    )
    expect(screen.getByText('Contenido extra')).toBeInTheDocument()
  })

  it('ejecuta onSubmit al enviar el formulario', () => {
    const onSubmit = jest.fn()
    const formItems: FormItems[] = [
      { name: 'campo1', label: 'Campo 1', type: 'input' },
    ]
    const { container } = render(<Formulario methods={ methods } onSubmit={ onSubmit } formItems={ formItems } children={ null } />)
    const form = container.querySelector('form')
    fireEvent.submit(form!)
    expect(onSubmit).toHaveBeenCalled()
  })
})
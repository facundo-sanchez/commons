import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import FormItem from '../src/components/Formulario/FormItem'

describe('FormItem', () => {
  it('renderiza los children correctamente', () => {
    render(<FormItem error="" style={{}}><span>Contenido</span></FormItem>);
    expect(screen.getByText('Contenido')).toBeInTheDocument();
  });

  it('muestra el error si existe', () => {
    render(<FormItem error="Error de validación" style={{}}><span>Contenido</span></FormItem>);
    expect(screen.getByText((content) => content.includes('Error de validación'))).toBeInTheDocument();
  });

  it('no muestra el error si es vacío', () => {
    render(<FormItem error="" style={{}}><span>Contenido</span></FormItem>);
    const error = screen.queryByText((content) => content.includes('Error de validación'));
    expect(error).toBeNull();
  });

  it('aplica los estilos correctamente', () => {
    render(<FormItem error="" style={{ margin: '2em' }}><span>Contenido</span></FormItem>);
    const wrapper = screen.getByText('Contenido').closest('.container-form-item');
    expect(wrapper).toHaveStyle('margin: 2em');
  });
});
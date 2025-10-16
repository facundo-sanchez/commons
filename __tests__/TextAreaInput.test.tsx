import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { TextAreaInput } from '../src/components/Formulario/inputs/TextAreaInput'

describe('TextAreaInput', () => {
  const baseProps = {
    name: 'test-textarea',
    label: 'Texto',
    ref: jest.fn(),
    rest: {},
    getLabel: () => <span>Texto</span>,
    renderError: () => '',
    onChangeForm: jest.fn(),
    onChange: jest.fn(),
    value: 'valor inicial',
    formItemStyle: {},
    formStyle: {},
    width: '250px',
    height: '40px',
    placeholder: 'Escribe aquí',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renderiza el TextField multilinea y la etiqueta', () => {
    render(<TextAreaInput {...baseProps} />);
    expect(screen.getByText('Texto')).toBeInTheDocument();
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveValue('valor inicial');
  });

  it('llama a onChangeForm y onChange al cambiar el texto', () => {
    render(<TextAreaInput {...baseProps} />);
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'nuevo valor' } });
    expect(baseProps.onChangeForm).toHaveBeenCalledWith('nuevo valor');
    expect(baseProps.onChange).toHaveBeenCalledWith('nuevo valor');
  });

  it('llama solo a onChangeForm cuando onChange no es una función', () => {
    const props = { ...baseProps, onChange: undefined };
    render(<TextAreaInput {...props} />);
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'solo form' } });
    expect(props.onChangeForm).toHaveBeenCalledWith('solo form');
  });

  it('reenvía las props adicionales al componente TextField (solo disabled)', () => {
    const props = { ...baseProps, rest: { disabled: true } };
    render(<TextAreaInput {...props} />);
    const textarea = screen.getByRole('textbox') as HTMLInputElement;
    expect(textarea.disabled).toBe(true);
  });

  it('muestra el error de renderError dentro de FormItem', () => {
    const props = { ...baseProps, renderError: () => 'Campo requerido' };
    const { container } = render(<TextAreaInput {...props} />);
    const error = container.querySelector('.error-message');
    expect(error).toBeInTheDocument();
    expect(error).toHaveTextContent('Campo requerido');
  });

  it('renderiza el placeholder correctamente', () => {
    render(<TextAreaInput {...baseProps} />);
    const textarea = screen.getByRole('textbox') as HTMLInputElement;
    expect(textarea.placeholder).toBe('Escribe aquí');
  });

  it('aplica los estilos de formStyle', () => {
    const props = { ...baseProps, formStyle: { margin: '2em' } };
    const { container } = render(<TextAreaInput {...props} />);
    const styled = container.querySelector('[style*="margin"]');
    expect(styled).toBeTruthy();
    expect(styled).toHaveStyle('margin: 2em');
  });
});
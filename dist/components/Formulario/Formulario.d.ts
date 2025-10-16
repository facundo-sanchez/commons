/**
 * Formulario component
 *
 * @module Formulario
 *
 * Componente que renderiza un formulario dinámico a partir de un array de `formItems`.
 * Soporta campos simples y grupos (filas) y grupos de radio.
 *
 * @param {React.ReactNode} props.children Contenido adicional que se renderiza dentro del formulario
 * @param {Function} props.onSubmit Función que se ejecuta al enviar el formulario
 * @param {Object} props.methods Métodos de react-hook-form (p.ej. useForm())
 * @param {FormItems[]} props.formItems Estructura que define los campos del formulario
 *
 * @example
 * <Formulario methods={methods} onSubmit={handleSubmit} formItems={[{ name: 'field1', label: 'Campo 1', type: 'input' }]}>
 *   <div>Contenido</div>
 * </Formulario>
 */
import type { FormularioProps } from '../../types/FormularioProps';
declare const Formulario: ({ children, onSubmit, methods, formItems }: FormularioProps) => import("react/jsx-runtime").JSX.Element;
export default Formulario;

/**
 * FormItem
 *
 * Contenedor para cada item del formulario. Muestra children y un mensaje de error cuando `error` no es vacío.
 *
 * @param {string} props.error Mensaje de error a mostrar
 * @param {React.CSSProperties} props.style Estilos aplicados al contenedor
 * @param {React.ReactNode} props.children Contenido del FormItem
 */
import './Formulario.style.css';
import type { FormItemProps } from '../../types/FormItemProps';
declare const FormItem: ({ error, style, children }: FormItemProps) => import("react/jsx-runtime").JSX.Element;
export default FormItem;

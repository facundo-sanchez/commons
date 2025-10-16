'use client'

/**
 * FormItem
 *
 * Contenedor para cada item del formulario. Muestra children y un mensaje de error cuando `error` no es vacío.
 *
 * @param {string} props.error Mensaje de error a mostrar
 * @param {React.CSSProperties} props.style Estilos aplicados al contenedor
 * @param {React.ReactNode} props.children Contenido del FormItem
 */
import './Formulario.style.css'
import type { FormItemProps } from '../../types/FormItemProps'

const FormItem = ({ error, style = {}, children }: FormItemProps) => {
  return (
    <div className="d-flex container-form-item" style={{ ...style }}>
      <div>{children}</div>
      <div className="error-message">{error && <span>{error}</span>}</div>
    </div>
  );
};

export default FormItem;

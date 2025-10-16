'use client'

/**
 * FormBoton
 *
 * Botón conectado al contexto de react-hook-form. Si `disabledBoton` es true,
 * el botón se deshabilita cuando el formulario no es válido (formState.isValid === false).
 *
 * @param {BotonProps} props Props del componente Boton
 */
import { useFormContext } from 'react-hook-form'
import Boton from '../Boton/Boton'
import type { BotonProps } from '../../types/BotonProps'

const FormBoton = ({
  label,
  type,
  icon: Icon,
  disabledBoton,
  htmlType,
  ...rest
}: BotonProps) => {
  const {
    formState: { isValid },
  } = useFormContext();

  return (
    <Boton
      label={label}
      icon={Icon}
      type={type}
      htmlType={htmlType}
      disabled={!disabledBoton ? false : !isValid}
      {...rest}
    />
  );
};

export default FormBoton;

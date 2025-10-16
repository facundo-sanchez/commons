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

'use client';
import { FormProvider } from 'react-hook-form'
import type { FormItems, FormularioProps } from '../../types/FormularioProps'
import type { FormInputProps } from '../../types/FormInputProps'
import FormInput from './FormInput'
import Flex from '../Flex/Flex'
import { RadioGroup } from '@mui/material'

const Formulario = ({ children, onSubmit, methods, formItems }: FormularioProps) => {

  // Se dibuja la estructura dinamica pasada por un array
  const renderInputs = (fields: FormItems[]): any => {
    return fields.map((item, index) => {
      if (Array.isArray(item)) {
        if (item[0].type === 'radio') {
          return (
            <Flex key={`${index}`} direction="row" gap={4}>
              <RadioGroup name={item[0].name} defaultValue={item[0].defaultValue}>
                <Flex key={`${index}`} direction="row" gap={4}>
                  {item.map((subItem, subIndex) => (
                    <FormInput key={`${index}-${subIndex}`} {...(subItem as FormInputProps)} />
                  ))}
                </Flex>
              </RadioGroup>
            </Flex>
          );
        }
        return (
          <Flex key={`${index}`} direction="row" gap={4}>
            {item.map((subItem, subIndex) => (
              <FormInput key={`${index}-${subIndex}`} {...(subItem as FormInputProps)} />
            ))}
          </Flex>
        );
      }

      return <FormInput key={index} {...(item as FormInputProps)} />;
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {Array.isArray(formItems) && renderInputs(formItems)}
        {children}
      </form>
    </FormProvider>
  );
};

export default Formulario;

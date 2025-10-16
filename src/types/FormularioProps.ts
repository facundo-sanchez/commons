import type { ReactNode } from 'react';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import type { FormInputProps } from './FormInputProps';


export type FormItems =  FormInputProps | FormInputProps[]
export interface FormularioProps {
  children: ReactNode;
  methods: any;
  onSubmit: SubmitHandler<FieldValues>;
  formItems?: FormItems[];
}

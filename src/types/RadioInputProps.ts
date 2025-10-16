import type { RefCallBack } from 'react-hook-form'
import type { FormInputProps } from './FormInputProps'
import type { JSX } from '@emotion/react/jsx-runtime'

export interface RadioInputProps extends FormInputProps {
  ref: RefCallBack
  getLabel: () => JSX.Element,
  renderError: (name: string) => string
  onChangeForm: (...event: any[]) => void
  value: any
}
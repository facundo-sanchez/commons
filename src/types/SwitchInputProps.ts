import type { FormInputProps } from './FormInputProps'
import type { RefCallBack } from 'react-hook-form'
import type { JSX } from '@emotion/react/jsx-runtime'

export interface SwitchInputProps extends FormInputProps {
  renderError: (name: string) => string,
  ref: RefCallBack,
  getLabel: () => JSX.Element,
  onChangeForm: (...event: any[]) => void
  value: any
}
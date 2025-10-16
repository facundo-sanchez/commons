/**
 * FormInput
 *
 * Componente que envuelve los diferentes tipos de inputs usados en el formulario.
 * Usa Controller de react-hook-form para inyectar `onChange`, `value` y `ref`.
 *
 * @param {FormInputProps} props Props del input (type, name, label, options, etc.)
 */
'use client'
import { useEffect, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import type { FormInputProps } from '../../types/FormInputProps'
import { BaseInput } from './inputs/BaseInput'
import { SwitchInput } from './inputs/SwitchInput'
import { TextAreaInput } from './inputs/TextAreaInput'
import { CheckBoxInput } from './inputs/CheckBoxInput'
import { RadioInput } from './inputs/RadioInput'
import { DateInput } from './inputs/DateInput'
import { SelectInput } from './inputs/SelectInput'

const FormInput = (props: FormInputProps) => {
  const {
    type,
    name,
    label,
    mode = '',
    options,
    required = false,
    tooltip = true,
  } = props
  const { control, getFieldState, watch, formState, getValues } = useFormContext()
  const inputWatch = watch(name)

  const [tooltipStr, setTooltipStr] = useState<string[]>([])

  const renderError = (name: string) => {
    const fieldState = getFieldState(name, formState)
    return fieldState?.error?.message ?? ''
  }

  const getLabel = () =>
    label ? (
      <div className="label-form">
        <label
          htmlFor={ name }
          title={ label }
          style={ {
            color: !!renderError(name) ? '#d32f2f' : 'rgba(0, 0, 0, 0.87)',
          } }
        >
          { required && <span className="form-required">*</span> }
          { label }
        </label>
      </div>
    ) : (
      <></>
    )
  const getTextTooltip = () => {
    const str = getValues(name)
    if (!str) {
      setTooltipStr([])
      return
    }

    if (typeof str === 'string') {
      setTooltipStr([str])
    } else if (typeof str === 'object') {
      setTooltipStr(!mode ? [str.label] : [...tooltipStr, str.label])
    } else {
      setTooltipStr([
        options?.find(e => e?.value === str?.value)?.label,
      ] as string[])
    }
  }

  useEffect(() => {
    //! Se resetea el valor del tooltip
    if (tooltip && !inputWatch) {
      getTextTooltip()
    }
  }, [inputWatch])

  return (
    <Controller
      control={ control }
      name={ name }
      render={ ({ field: { onChange: onChangeForm, value, ref } }) => {
        const commonProps = {
          ref,
          getLabel,
          renderError,
          onChangeForm,
          value,
          ...props
        }

        switch (type) {
          case 'input':
          default:
            return (
              <BaseInput { ...commonProps } />
            )
          case 'select':
            return (
              <SelectInput getTextTooltip={ getTextTooltip } { ...commonProps } />
            )
          case 'date':
            return (
              <DateInput { ...commonProps } />
            )
          case 'textarea':
            return (
              <TextAreaInput { ...commonProps } />
            )
          case 'checkbox':
            return (
              <CheckBoxInput { ...commonProps } />
            )
          case 'radio':
            return (
              <RadioInput { ...commonProps } />
            )
          case 'switch':
            return (
              <SwitchInput { ...commonProps } />
            )
        }
      }
      }
    />
  )
}

export default FormInput

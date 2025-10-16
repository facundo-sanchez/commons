/**
 * BaseInput
 *
 * Input base para campos de tipo 'input'. Envuelve un TextField de MUI dentro de FormItem.
 *
 * @param {BaseInputProps} props
 */
'use client'

import { TextField } from '@mui/material'
import FormItem from '../FormItem'
import type { BaseInputProps } from '../../../types/BaseInputProps'

export const BaseInput = (props: BaseInputProps) => {
  const {
    formItemStyle,
    name,
    formStyle = {},
    width = '200px',
    height = '35px',
    value,
    placeholder,
    rest,
    ref,
    getLabel,
    renderError,
    onChangeForm,
    onChange } = props

  return (
    <FormItem error={ renderError(name) } style={ { ...formItemStyle } }>
      <TextField
        ref={ ref }
        id={ name }
        error={ !!renderError(name) }
        label={ getLabel() }
        style={ {
          width,
          height,
          ...formStyle
        } }
        value={ value || '' }
        placeholder={ placeholder }
        onChange={ e => {
          onChangeForm(e.target.value)
          if (typeof onChange === 'function') {
            onChange(e.target.value)
          }
        } }
        size="small"
        variant="standard"
        { ...rest }
      />
    </FormItem>
  )
}
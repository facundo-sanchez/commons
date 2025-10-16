/**
 * TextAreaInput
 *
 * Componente TextArea (multiline) envuelto en FormItem.
 *
 * @param {TextAreaInputProps} props
 */
'use client'
import type { TextAreaInputProps } from '../../../types/TextAreaInputProps'
import FormItem from '../FormItem'
import { TextField } from '@mui/material'

export const TextAreaInput = (props: TextAreaInputProps) => {
  const {
    formItemStyle,
    ref,
    name,
    width = '200px',
    height = '35px',
    formStyle = {},
    value,
    placeholder,
    rest,
    renderError,
    getLabel,
    onChangeForm,
    onChange
  } = props

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
        value={ value }
        placeholder={ placeholder }
        onChange={ e => {
          onChangeForm(e.target.value)
          if (typeof onChange === 'function') {
            onChange(e.target.value)
          }
        } }
        size="small"
        variant="standard"
        multiline
        { ...rest }
      />
    </FormItem>
  )
}
/**
 * CheckBoxInput
 *
 * Input tipo checkbox envuelto en FormItem.
 *
 * @param {CheckBoxInputProps} props
 */
'use client'
import type { CheckBoxInputProps } from '../../../types/CheckBoxInputProps'
import FormItem from '../FormItem'
import { Checkbox, FormControlLabel } from '@mui/material'

export const CheckBoxInput = (props: CheckBoxInputProps) => {
  const {
    name,
    formItemStyle,
    label,
    ref,
    value,
    rest,
    onChangeForm,
    onChange,
    renderError,
  } = props

  return (
    <FormItem error={ renderError(name) } style={ { ...formItemStyle } }>
      <FormControlLabel
        label={ label }
        control={
          <Checkbox
            ref={ ref }
            id={ name }
            value={ value }
            onChange={ (_, checked) => {
              onChangeForm(checked)
              if (typeof onChange === 'function') {
                onChange(checked)
              }
            } }
            { ...rest } />
        }
      />
    </FormItem>
  )
}
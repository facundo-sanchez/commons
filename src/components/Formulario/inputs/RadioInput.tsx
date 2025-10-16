/**
 * RadioInput
 *
 * Input tipo radio envuelto en FormItem.
 *
 * @param {RadioInputProps} props
 */
'use client'
import type { RadioInputProps } from '../../../types/RadioInputProps'
import FormItem from '../FormItem'
import { FormControlLabel, Radio } from '@mui/material'

export const RadioInput = (props: RadioInputProps) => {
  const {
    name,
    label,
    formItemStyle,
    ref,
    value,
    rest,
    renderError,
    onChangeForm,
    onChange
  } = props

  return (
    <FormItem error={ renderError(name) } style={ { ...formItemStyle } }>
      <FormControlLabel
        label={ label }
        control={
          <Radio
            ref={ ref }
            id={ name }
            value={ value }
            onChange={ (value) => {
              onChangeForm(value)
              if (typeof onChange === 'function') {
                onChange(value)
              }
            } }
            { ...rest }
          />
        }
      />
    </FormItem>
  )
}
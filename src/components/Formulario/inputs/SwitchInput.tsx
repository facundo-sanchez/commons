/**
 * SwitchInput
 *
 * Componente switch envuelto en FormItem.
 *
 * @param {SwitchInputProps} props
 */
'use client'
import { FormControlLabel, Switch } from '@mui/material'
import FormItem from '../FormItem'
import type { SwitchInputProps } from '../../../types/SwitchInputProps'

export const SwitchInput = (props: SwitchInputProps) => {
  const {
    formItemStyle,
    name,
    label,
    ref,
    value,
    formStyle,
    rest,
    onChangeForm,
    onChange,
    renderError } = props

  return (
    <FormItem error={ renderError(name) } style={ { ...formItemStyle } }>
      <FormControlLabel
        label={ label }
        style={ {
          ...formStyle,
        } }
        control={
          <Switch
            ref={ ref }
            id={ name }
            checked={ value }
            onChange={ (_, checked) => {
              onChangeForm(checked)
              if (typeof onChange === 'function') {
                onChange(checked)
              }
            } }
            color="primary"
            { ...rest }
          />
        }
      />
    </FormItem>
  )
}
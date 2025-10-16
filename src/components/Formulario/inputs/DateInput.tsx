/**
 * DateInput
 *
 * Componente date picker que envuelve MUI DatePicker dentro de FormItem.
 * Soporta rangeDate y propaga errores para cambiar el color del textField.
 *
 * @param {DateInputProps} props
 */
'use client'
import FormItem from '../FormItem'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import moment from 'moment'
import type { DateInputProps } from '../../../types/DateInputProps'

export const DateInput = (props: DateInputProps) => {
  const {
    name,
    formItemStyle,
    ref,
    value,
    width = '200px',
    height = '35px',
    formStyle = {},
    rest,
    rangeDate,
    renderError,
    getLabel,
    onChangeForm,
    onChange
  } = props

  return (
    <FormItem error={ renderError(name) } style={ { ...formItemStyle } }>
      { rangeDate ? (
        <div></div>
      ) : (
        <LocalizationProvider dateAdapter={ AdapterMoment }>
          <DatePicker
            ref={ ref }
            sx={ {
              width,
              height,
              ...formStyle,
            } }

            label={ getLabel() }
            value={ value ? moment(value) : null }
            slotProps={ {
              textField: {
                variant: 'standard',
                color: !!renderError(name) ? 'error' : 'primary', //! Logica para agregar ERROR
                'data-testid': rest?.['data-testid'],
              },
            } }
            defaultValue={ value }
            onChange={ (value, option) => {
              onChangeForm(value)
              if (typeof onChange === 'function') {
                onChange(value, option)
              }
            } }
            { ...rest }
          />
        </LocalizationProvider>
      ) }
    </FormItem>
  )
}
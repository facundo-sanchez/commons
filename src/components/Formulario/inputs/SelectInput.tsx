/**
 * SelectInput
 *
 * Componente Autocomplete envuelto en FormItem con soporte para tooltip y opciones.
 *
 * @param {SelectInputProps} props
 */
'use client'
import { Autocomplete, TextField, Tooltip } from '@mui/material'
import FormItem from '../FormItem'
import Flex from '../../Flex/Flex'
import type { SelectInputProps } from '../../../types/SelectInputProps'

export const SelectInput = (props: SelectInputProps) => {
  const {
    name,
    formItemStyle,
    ref,
    value,
    rest,
    tooltip,
    width = '200px',
    height = '35px',
    formStyle = {},
    placeholder,
    tooltipStr,
    options,
    loading,
    renderError,
    getLabel,
    onChangeForm,
    onChange,
    getTextTooltip
  } = props

  return (
    <FormItem error={ renderError(name) } style={ { ...formItemStyle } }>
      <Tooltip
        title={
          tooltip ? (
            tooltipStr?.filter(e => Boolean(e))?.length === 0 ? (
              ''
            ) : (
              <>
                <Flex direction="column">
                  { tooltipStr?.map(e => (
                    <span key={ e }>{ e }</span>
                  )) }
                </Flex>
              </>
            )
          ) : (
            ''
          )
        }
      >
        <Autocomplete
          ref={ ref }
          id={ name }
          style={ {
            width,
            height,
            ...formStyle,
          } }
          value={ options?.find(e => e.value === value) || null }
          options={ options as any }
          loading={ loading }
          onChange={ (e, option: any) => {
            //! validar
            onChangeForm(option?.value)
            if (typeof onChange === 'function') {
              onChange(option?.value, e)
            }
            if (tooltip) {
              getTextTooltip()
            }
          } }
          renderInput={ params => (
            <TextField
              { ...params }
              value={ options?.find(e => e.value === value)?.label || '' }
              label={ getLabel() }
              placeholder={ placeholder }
              error={ !!renderError(name) }
              variant="standard"
            />
          ) }
          { ...rest }
        />
      </Tooltip>
    </FormItem>
  )
}
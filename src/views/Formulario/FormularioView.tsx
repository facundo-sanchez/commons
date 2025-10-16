import { useForm } from "react-hook-form"
import Formulario from "../../components/Formulario/Formulario"
import FormInput from "../../components/Formulario/FormInput"
import FormBoton from "../../components/Formulario/FormBoton"
import { RadioGroup } from "@mui/material"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Flex from "../../components/Flex/Flex"
const FormularioView = () => {

  //! Validacion del formulario
  const validationSchema = yup.object().shape({
    nombre: yup.string().required('El nombre es requerido'),
    apellido: yup.string().notRequired(),
    celular: yup.string().required('El celular es requerido'),
    ciudad: yup.number().notRequired(),
    fecha: yup.string().notRequired(),
    comentarios: yup.string().notRequired(),
    activo: yup.boolean().notRequired(),
  })

  const methods = useForm({
    defaultValues: {
      nombre: '',
      apellido: '',
      celular: '',
      ciudad: 1,
      fecha: '',
      comentarios: '',
      activo: true
    },
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = (data: any) => {
    console.log(data)
    //! Llamar servicio
  }

  return (
    <>
      <Formulario
        methods={ methods }
        onSubmit={ onSubmit }
        formItems={
          [
            [
              { label: 'Estandar', name: 'estandar', type: 'checkbox' },
              { label: 'Plan 5', name: 'plan5', type: 'checkbox' }
            ],
            {
              label: "Celular",
              name: 'celular',
              type: 'input',
              required: true
            },
          ]
        }
      >
        <RadioGroup name="radio-group" defaultValue="ni">
          <Flex>
            <FormInput label="NF" value="nf" name="radio-group" type="radio" />
            <FormInput label="NI" value="ni" name="radio-group" type="radio" />
          </Flex>
        </RadioGroup>
        <FormInput label="Nombre" name="nombre" type="input" required />
        <FormInput label="Apellido" name="apellido" type="input" />
        {/* <FormInput label="Celular" name="celular" type="input" required /> */ }
        <FormInput label="Fecha" name="fecha" type="date" />
        <FormInput label="Comentarios" name="comentarios" type="textarea" />
        <FormInput
          label="Activo"
          name="activo"
          type="switch"
          defaultValue={ true }
          defaultChecked
        />
        <FormInput
          label="Ciudad"
          name="ciudad"
          type="select"
          options={ [
            {
              label: "Buenos aires",
              value: 1
            },
            {
              label: "Mar del plata",
              value: 2
            },
            {
              label: "Tandil",
              value: 3
            },
            {
              label: "Olavarria",
              value: 4
            },
          ] }
        />
        <FormBoton htmlType="submit" label="Guardar" disabledBoton />
      </Formulario>
    </>
  )
}

export default FormularioView

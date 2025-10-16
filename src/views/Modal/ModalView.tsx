import { useState } from 'react'
import ModalPopup from '../../components/ModalPopup/ModalPopup';
import Boton from '../../components/Boton/Boton';
import Flex from '../../components/Flex/Flex';

const ModalView = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Flex gap={4}>
      <Boton  htmlType='button' label='Default' onClick={()=>setOpen(true)}/>

      <Boton type='secondary' htmlType='button' label='Secondary' onClick={()=>setOpen(true)}/>

      <Boton type='text' htmlType='button' label='Volver' onClick={()=>setOpen(true)}/>

      <Boton type='cancel' htmlType='button' label='Cancelar' onClick={()=>setOpen(true)}/>
      </Flex>
      <ModalPopup centered title='Esta seguro que desea enviar' open={open} onClose={()=>setOpen(false)} onExecuteCallback={()=>{}}>
        <p>Puede escribir sus comentarios</p>
        <div>text</div>
      </ModalPopup>
    </div>
  )
}

export default ModalView

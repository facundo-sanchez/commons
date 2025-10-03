import { useState } from 'react';
import Boton from './components/Boton/Boton';
import ContainerComponent from './components/ContainerComponent/ContainerComponent';
import ContainerTitle from './components/ContainerTitle/ContainerTitle';
import ModalPopup from './components/ModalPopup/ModalPopup';

function App() {
  // const [count, setCount] = useState(0)
  const [open, setOpen] = useState(false)
  return (
    <ContainerComponent>
      <ContainerTitle title="Commons" subTitle="test" />
      <Boton htmlType="button" label="Abrir modal" onClick={()=>setOpen(true)} />

      <ModalPopup title='Modal Popup' onClose={()=>setOpen(false)} open={open} centered onExecuteCallback={()=>{console.log('click')}} >
        <h1>children</h1>
      </ModalPopup>
    </ContainerComponent>
  );
}

export default App;

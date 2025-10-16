import ContainerComponent from './components/ContainerComponent/ContainerComponent'
import FormularioView from './views/Formulario/FormularioView'
import ModalView from './views/Modal/ModalView'

function App() {
  return (
    <>
      <ContainerComponent>
        <FormularioView />
      </ContainerComponent>
      <ContainerComponent>
        <ModalView />
      </ContainerComponent>

    </>
  )
}

export default App

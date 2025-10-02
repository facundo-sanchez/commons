import Boton from './components/Boton/Boton';
import ContainerComponent from './components/ContainerComponent/ContainerComponent';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <ContainerComponent>
      <Boton htmlType="button" label="hola" />
    </ContainerComponent>
  );
}

export default App;

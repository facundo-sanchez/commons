import Boton from './components/Boton/Boton';
import ContainerComponent from './components/ContainerComponent/ContainerComponent';
import ContainerTitle from './components/ContainerTitle/ContainerTitle';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <ContainerComponent>
      <ContainerTitle title='hola' subTitle='test'/>
      <Boton htmlType="button" label="hola" />
    </ContainerComponent>
  );
}

export default App;

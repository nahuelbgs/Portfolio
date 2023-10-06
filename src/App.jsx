import "./App.css";
import Cover from "./Components/Cover/Cover";
import Formulario from "./Components/Formulario/Formulario";
import ProyectsList from "./Components/ProyectsList/ProyectsList";
import { usePortfolioContext } from "./context/PortfolioContext";

function App() {
  const {darkMode} = usePortfolioContext()
  return (
    <div className={darkMode === true ? 'dark' : 'white'}>
        <Cover />
        <ProyectsList />
        <Formulario />
    </div>
  );
}

export default App;

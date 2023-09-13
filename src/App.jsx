import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Cover from "./Components/Cover/Cover";
import Formulario from "./Components/Formulario/Formulario";
import ProyectsList from "./Components/ProyectsList/ProyectsList";
import { usePortfolioContext } from "./context/PortfolioContext";

function App() {
  const {darkMode} = usePortfolioContext()
  return (
    <div className={darkMode === true ? 'dark' : 'white'}>
        <Cover />
        <AboutMe />
        <ProyectsList />
        <Formulario />
    </div>
  );
}

export default App;

import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Cover from "./Components/Cover/Cover";
import Formulario from "./Components/Formulario/Formulario";
import ProyectsList from "./Components/ProyectsList/ProyectsList";

function App() {
  return (
    <>
      <Cover />
      <AboutMe />
      <ProyectsList />
      <Formulario />
    </>
  );
}

export default App;

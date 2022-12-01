import './App.css';
import {NavBar} from "./components/NavBar/NavBar"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer greeting="Curso React"/>
    </div>
  );
}

export default App;

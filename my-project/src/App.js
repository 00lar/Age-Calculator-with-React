import './App.css';
import {Contenedor} from './Contenedor';
import {Cuadro_Entrada} from './Cuadro_Entrada';
import {Cuadro_Salida} from './Cuadro_Salida';
import Cuadro from './Cuadro';


function App() {
  return (
      <Contenedor>
        <div className="w-10/12 bg-white grid grid-rows-3">
          <Cuadro_Entrada />
          <Cuadro_Salida />
        </div>
      </Contenedor>
  );
}

export default App;

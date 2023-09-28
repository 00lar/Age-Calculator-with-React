import './App.css';
import {Contenedor} from './Contenedor';
import {Cuadro_Entrada} from './Cuadro_Entrada';
import {Cuadro_Salida} from './Cuadro_Salida';
import Cuadro from './Cuadro';
import {useState} from 'react';


    


function App() {
  const [day, setDay] = useState("");
  const [month,setMonth] = useState("");
  const [year,setYear] = useState("");
  return (
      <Contenedor>
        <div className="w-10/12 max-w-sm bg-white grid grid-rows-3 font-Poppins p-6 rounded-3xl rounded-tr-sized">
          <Cuadro_Entrada
          day = {day}
          month = {month}
          year = {year}
          setDay = {setDay}
          setMonth = {setMonth}
          setYeat = {setYear} />
          <Cuadro_Salida />
          <button>Calcular</button>
        </div>
      </Contenedor>
  );
}

export default App;

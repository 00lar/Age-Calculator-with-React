import './App.css';
import {Contenedor} from './Contenedor';
import {Cuadro_Entrada} from './Cuadro_Entrada';
import {Cuadro_Salida} from './Cuadro_Salida';
import {useState} from 'react';
import BtnSvg from './down-arrow.svg';

function App() {
  const [day, setDay] = useState("");
  const [month,setMonth] = useState("");
  const [year,setYear] = useState("");

  const [day_out, setDay_out] = useState("0");
  const [month_out, setMonth_out] = useState("91");
  const [year_out, setYear_out] = useState("21");

  const updval = () => {
    setDay_out(28-day);
    setMonth_out(9-month);
    setYear_out(2023-year);
  }
  return (
      <Contenedor>
        <div className="w-10/12 max-w-sm bg-white grid grid-rows-3 font-Poppins p-6 rounded-3xl rounded-tr-sized">
          <Cuadro_Entrada
            day = {day}
            month = {month}
            year = {year}
            setDay = {setDay}
            setMonth = {setMonth}
            setYear = {setYear} 
            >
            
           </Cuadro_Entrada>
           <button
            onClick={updval}
            className="absolute w-12 top-60 left-2/4"
            >
              <img
              className='w-full'
              src={BtnSvg}
              ></img>
            </button>
          <Cuadro_Salida
          day_out = {day_out}
          setDay_out = {setDay_out}
          month_out = {month_out}
          setMonth_out = {setMonth_out}
          year_out = {year_out}
          setYear_out = {setYear_out}
           />
          
        </div>
      </Contenedor>
  );
}

export default App;

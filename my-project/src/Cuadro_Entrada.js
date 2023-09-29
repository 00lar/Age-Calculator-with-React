import {useState} from 'react';

function Cuadro_Entrada(props) {
    const {day, month, year, setDay, setMonth, setYear} = props;

    const dayChange = (event) => {
        setDay(event.target.value);
        console.log(day);
    }
    const monthChange = (event) => {
        setMonth(event.target.value);
        console.log(month);
    }
    const yearChange = (e) => {
        setYear(e.target.value);
        console.log(year);
    }
    
    return (
        <div className="flex justify-center w-full col-span-1 border-b-2 border-gray-600">
            <div>
                <p>DAY</p>
                <input 
                className="texture-input"
                value = {day}
                onChangeCapture = {dayChange}/>
            </div>
            <div>
                <p>MONTH</p>
                <input className="texture-input"
                value={month}
                onChange={monthChange}></input>
            </div>
            <div>
                <p>YEAR</p>
                <input className="texture-input"
                        value={year}
                        onChange={yearChange}></input>
            </div>
        </div>
    )
}

export {Cuadro_Entrada};
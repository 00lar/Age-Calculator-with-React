import { useState } from "react";

function Cuadro_Salida(props) {
    const {day_out, setDay_out, month_out, setMonth_out, year_out, setYear_out} = props; 
    return (
        <div className="text-5xl row-span-2 p-3 flex flex-col py-12 space-y-3 ">
            <p className="age--output"><span>{day_out}</span>Days</p>
            <p className="age--output"><span>{month_out}</span>Months</p>
            <p className="age--output"><span>{year_out}</span>Years</p>
        </div>
    )
}

export {Cuadro_Salida};
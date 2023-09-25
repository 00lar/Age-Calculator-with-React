function Cuadro_Entrada() {
    return (
        <div className="flex justify-center w-full col-span-1 border-b-2 border-gray-600">
            <div>
                <p>DAY</p>
                <input className="texture-input"></input>
            </div>
            <div>
                <p>MONTH</p>
                <input className="texture-input"></input>
            </div>
            <div>
                <p>YEAR</p>
                <input className="texture-input"></input>
            </div>
        </div>
    )
}

export {Cuadro_Entrada};
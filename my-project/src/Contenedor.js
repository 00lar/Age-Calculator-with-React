function Contenedor({children}) {
    return (
        <div className="w-screen flex justify-center items-center h-screen bg-white-gray">
            {children}
        </div>
    )
}

export {Contenedor};
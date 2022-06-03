import React from "react"

export default function Cuadro({trans, id}){

    React.useEffect(() => {
        console.log(trans)
    }, [trans])
    
    return(
        <div className="mx-10 mb-16 w-64">
            <h1 className="text-xl font-semibold text-center">Desarrollador Web</h1>
            <hr className={`reveal${id} mx-16 border border-dark-0 transition-transform duration-1000 ease-out delay-300 ${trans}`}></hr>
            <p className="text-center">
                Tengo conocimientos y experiencia
                desarrollando aplicaciones web,
                principalmente usando React JS y React
                Native para aplicaciones móviles.

                Me manejo bien en la creación de estilos
                mediante CSS, utilizando el preprocesador
                Sass y/o el framework Tailwind CSS.

                También tengo experiencia en proyectos
                utilizando Next JS.
            </p>
        </div>
    )
}
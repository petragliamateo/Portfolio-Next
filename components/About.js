import Cuadro from "./Cuadro"

export default function About({trans}){
    return(
        <div className="w-full bg-dark-4 flex flex-col" id="about">
            <h1 className="self-center my-12 text-3xl font-semibold text-dark-6">Sobre mi</h1>

            <div className="flex flex-wrap justify-center md:mx-32 mx-16">

                <Cuadro titulo="Desarrollador Web" 
                    contenido="Tengo conocimientos y experiencia
                    desarrollando aplicaciones web,
                    principalmente usando React JS y React
                    Native para aplicaciones móviles.

                    Me manejo bien en la creación de estilos
                    mediante CSS, utilizando el preprocesador
                    Sass y/o el framework Tailwind CSS.

                    También tengo experiencia en proyectos
                    utilizando Next JS." 
                    trans={trans[1]} id="1" />

                <Cuadro titulo="Estudios" 
                    contenido="Actualmente soy estudiante de grado en
                    Ingeniería Electrónica y constanteme estoy
                    realizando cursos de programación. 
                    
                    Estudié durante 3 años la carrera de grado
                    Licenciatura en Astronomía, en la Universidad
                    Nacional de La Plata.
                    
                    Con esto, tengo fuertes conocimientos en
                    matemáticas, estadística, física y
                    computación." 
                    trans={trans[2]} id="2" />

                <Cuadro titulo="Intereses" 
                    contenido="Mi filosofía es poder aprender cada día algo
                    nuevo. Me gusta estar constantemente
                    superandome y proponiendome nuevas
                    metas y objetivos.
                    
                    Mis intereses actuales son poder
                    desarrollarme dentro de una empresa que me
                    permita adoptar nuevos conocimientos y
                    experiencias." 
                    trans={trans[3]} id="3" />

            </div>

        </div>
    )
}
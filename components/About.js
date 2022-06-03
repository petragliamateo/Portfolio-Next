import Cuadro from "./Cuadro"

export default function About({trans}){
    return(
        <div className="w-full bg-dark-4 flex flex-col">
            <h1 className="self-center my-12 text-3xl font-semibold">Sobre mi</h1>

            <div className="flex flex-wrap justify-center mx-32">
                <Cuadro titulo="" contenido="" trans={trans[1]} id="1" />
                <Cuadro titulo="" contenido="" trans={trans[2]} id="2" />
                <Cuadro titulo="" contenido="" trans={trans[3]} id="3" />
            </div>

        </div>
    )
}
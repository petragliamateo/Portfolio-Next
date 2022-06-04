export default function ProyectoMuestra({slide, imgUrl, titulo, contenido, projectUrl}){

    const position = slide == "left"? "mr-auto lg:ml-32 ml-16 flex-row" : "ml-auto lg:mr-32 mr-16 flex-row-reverse";
    
    return(
        <div className={`flex ${position} lg:w-2/3 w-[680px] h-96 my-16 bg-dark-1`}>
            <div className="w-1/2 h-full bg-blue-500"><img src={imgUrl} /></div>
            <div className="text-center w-full flex flex-col justify-between">
                <h1 className="my-8 text-2xl font-semibold">{titulo}</h1>
                <p className="">{contenido}</p>
                <a href={projectUrl} className={`my-8 w-32 mx-auto btn btn-dark border-dark-1`}>
                    Ir
                </a>
            </div>
        </div>
    )
}
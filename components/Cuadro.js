export default function Cuadro({trans, id, titulo, contenido}){
    
    return(
        <div className="md:mx-16 mx-8 mb-16 w-64">
            <h1 className="text-xl font-semibold text-center text-dark-5">{titulo}</h1>
            <hr className={`reveal${id} mx-14 mb-2 mt-1 border border-dark-1 
            transition-transform duration-1000 ease-out delay-300 ${trans}`}></hr>
            <p className="text-center text-dark-0">
                {contenido}
            </p>
        </div>
    )
}
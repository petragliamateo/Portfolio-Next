export default function Main({trans}){

    const marginResponsiveY = "xl:my-56 lg:my-48 md:my-32 sm:my-16 my-12"
    const marginResponsiveX = "xl:mx-52 lg:mx-48 md:mx-32 sm:mx-16 mx-12"
    const hoverButton = "hover:scale-125 transition-transform duration-400 ease-out"

    return(
        <div className="">
            <div className={`${marginResponsiveY} ${marginResponsiveX} text-dark-5`}>
                <h1 className="text-5xl font-semibold my-1">
                    Hola! Soy Mateo
                </h1>
                <hr className={`reveal0 w-64 mx-16 border border-dark-0 transition-transform duration-1000 ease-out ${trans}`}></hr>
                <h1 className="text-2xl font-semibold my-2">
                    Web Developer
                </h1>
                
                <button className={`my-6 py-4 px-8 font-bold bg-dark-3 shadow-xl text-dark-6 border border-dark-2 hover:border-dark-3`}>Contact Me</button>

                <ul className="flex my-2">
                    <li className={`mr-2 ${hoverButton}`}><a href="#!"><img src="/Icons/github-dark.svg" /></a></li>
                    <li className={`mx-2 ${hoverButton}`}><a href="#!"><img src="/Icons/linkedin-dark.svg" /></a></li>
                    <li className={`mx-2 ${hoverButton}`}><a href="#!"><img src="/Icons/instagram-dark.svg" /></a></li>
                </ul>
            </div>
        
            
        </div>
    )
}
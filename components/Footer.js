export default function Footer({handleScroll}){

    const hoverButton = "hover:scale-125 transition-transform duration-400 ease-out"

    return(
        <footer className="bg-gray-700 flex flex-col h-full relative">

            <ul className="flex my-5 self-center">
                <li className={`mr-2 ${hoverButton}`}><a href="#!"><img src="/Icons/github-light.svg" /></a></li>
                <li className={`mx-2 ${hoverButton}`}><a href="#!"><img src="/Icons/linkedin-light.svg" /></a></li>
                <li className={`mx-2 ${hoverButton}`}><a href="#!"><img src="/Icons/instagram-light.svg" /></a></li>
            </ul>

            <h1 className="mb-2 self-center">COPYRIGHT &copy; 2022 MATEO PETRAGLIA</h1>

            <button onClick={() => handleScroll("home")}
                    className="mb-2 bg-dark-2 text-gray-700 w-6 h-10 text-4xl self-center rounded-full"
                    >&#8593;</button>
        </footer>
    )
}
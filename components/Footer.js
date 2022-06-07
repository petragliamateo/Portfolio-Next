export default function Footer({handleScroll}){

    const hoverButton = "hover:scale-125 transition-transform duration-400 ease-out"

    return(
        <footer className="bg-slate-800 flex flex-col h-full relative">

            <ul className="flex my-5 self-center">
                <li className={`mr-2 ${hoverButton}`}><a href="https://github.com/petragliamateo"><img src="/Icons/github-light.svg" /></a></li>
                <li className={`mx-2 ${hoverButton}`}><a href="https://www.linkedin.com/in/petragliamateo/"><img src="/Icons/linkedin-light.svg" /></a></li>
                <li className={`mx-2 ${hoverButton}`}><a href="https://www.instagram.com/petragliamateo/"><img src="/Icons/instagram-light.svg" /></a></li>
            </ul>

            <h1 className="mb-2 self-center text-dark-6">COPYRIGHT &copy; 2022 MATEO PETRAGLIA</h1>

            <button onClick={() => handleScroll("home")}
                    className="mb-2 bg-dark-6 text-slate-800 w-6 h-10 text-4xl self-center rounded-full"
                    >&#8593;</button>
        </footer>
    )
}
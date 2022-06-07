export default function Navbar({handleScroll}){

    const navResponsive = " hidden lg:block"
    const listMenu = "mx-2 hover:text-dark-5 transition duration-500 ease-in-out"
    const marginResponsiveX = "lg:mx-32 md:mx-24 sm:mx-12 mx-8"

    

    return(
        <div className={`flex justify-between my-5 ${marginResponsiveX} text-dark-1 text-2xl font-semibold`}>
            <h1>Mateo Petraglia</h1>

            <div className={navResponsive}>
                <ul className={`flex`}>
                <li className={listMenu}>
                        <button onClick={() => handleScroll("home")}>Home</button>
                    </li>
                    <li className={listMenu}>
                        <button onClick={() => handleScroll("about")}>About</button>
                    </li>
                    <li className={listMenu}>
                        <button onClick={() => handleScroll("projects")}>Projects</button>
                    </li>
                    <li className={listMenu}>
                        <button onClick={() => handleScroll("contact")}>Contact</button>
                    </li>
                </ul>
            </div>
            
            <div className={navResponsive}>
                <div>DarkMode</div>
            </div>
            <div className="block lg:hidden">
                Menu
            </div>
            
        </div>
    )
}
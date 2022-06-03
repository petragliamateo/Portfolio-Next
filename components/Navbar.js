export default function Navbar(){

    const navResponsive = " hidden lg:block"

    return(
        <div className="flex justify-between my-5 mx-32 text-dark-1 text-2xl font-semibold">
            <h1>Mateo Petraglia</h1>

            <div className={navResponsive}>
                <ul className={`flex`}>
                    <li className="mx-2">Home</li>
                    <li className="mx-2">About</li>
                    <li className="mx-2">Projects</li>
                    <li className="mx-2">Contact</li>
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
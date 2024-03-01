import { NavLink } from "react-router-dom"
import { CiMenuBurger } from "react-icons/ci";

export const Navbar = () => {
    const activeStyle = "underline underline-offset-4"
    
    return (
        <nav id="nav" className="bg-white/90 backdrop-blur-md border border-stone-300 flex justify-between items-center fixed z-10 top-0 w-full py-2.5 px-8 text-base">
            <ul className="flex sm:hidden">
                <li className="flex sm:hidden ">
                    <CiMenuBurger className="w-8 h-8" />
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-2xl">
                    <NavLink 
                        to='/'
                        >
                        <img className="h-10 w-10" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" />
                    </NavLink>
                </li>
                <li>
                    <input placeholder="Search" className="border border-stone-300 rounded-lg h-10 w-72 p-2" type="text" />
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="hidden lg:block">
                        LogIn
                </li>
                <li className="hidden sm:block">
                    <NavLink 
                        to='/my-orders'
                        className={({ isActive })=>
                            isActive ? activeStyle : undefined
                        } >
                        <button className="flex items-center gap-1 border border-sky-500">
                            Create Account
                        </button>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

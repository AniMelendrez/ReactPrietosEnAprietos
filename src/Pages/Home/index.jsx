import { Navbar } from "../../Components/NavBar"
import { Footer } from "../../Components/footer"
import { AsideLeft } from "../../Components/Aside Left"
import { AsideRight } from "../../Components/Aside Right"
import { Posts } from "../../Components/Posts"

export const Home = () => {
    return(
        <>
            <Navbar/>
            <div className="flex min-w-screen">
                <div className="bg-blue-600 grow h-14">
                    caca
                </div>
                <div className="">
                    pipi
                </div>
                <div className="bg-lime-500">
                    bbi   
                </div>
            </div>
            <Footer/>
        </>

    )
}
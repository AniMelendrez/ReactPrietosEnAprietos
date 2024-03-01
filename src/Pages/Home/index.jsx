import { Navbar } from "../../Components/NavBar"
import { Footer } from "../../Components/footer"
import { AsideLeft } from "../../Components/Aside Left"
import { AsideRight } from "../../Components/Aside Right"
import { Posts } from "../../Components/Posts"

export const Home = () => {
    return(
        <div className="flex flex-column  gap-8 w-full bg-stone-100">
            <Navbar/>
            <div className="flex flex-row gap-8">
                <AsideLeft/>
                <Posts/>
                <AsideRight/>
            </div>
            <Footer/>
        </div>

    )
}
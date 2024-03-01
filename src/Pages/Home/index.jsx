import { Navbar } from "../../Components/NavBar";
import { Footer } from "../../Components/footer";
import { AsideLeft } from "../../Components/AsideLeft";
import { AsideRight } from "../../Components/Aside Right";
import { Posts } from "../../Components/Posts";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Hola</h1>
      <div className="flex flex-row gap-8 w-full max-w-screen-lg p-2">
        <AsideLeft />
        <Posts />
        <AsideRight />
      </div>
      <Footer />
    </div>
  );
};

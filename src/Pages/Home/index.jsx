import { Navbar } from "../../Components/NavBar";
import { Footer } from "../../Components/footer";
import { AsideLeft } from "../../Components/Aside Left";
import { AsideRight } from "../../Components/Aside Right";
import { Posts } from "../../Components/Posts";

export const Home = () => {
  return (
    <>
      <Navbar />
      <br />
      <div className="flex flex-grow py-20 px-60 space-x-9 h-full static">
        <div className="bg-purple-400 w-1/4 min-h-80">
          <AsideLeft />
        </div>
        <div className="bg-pink-400 w-1/2 min-h-80">
          <Posts />
        </div>
        <div className=" w-1/4 min-h-80 ">
          <AsideRight />
        </div>
      </div>
      <Footer />
    </>
  );
};

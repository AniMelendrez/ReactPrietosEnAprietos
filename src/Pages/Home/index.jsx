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
      <div className="flex flex-col md:flex-row py-20 px-4 md:px-20 space-y-4 md:space-y-0 md:space-x-9 h-full">
        <div className="w-full md:w-1/4 min-h-80 hidden md:block">
          <AsideLeft />
        </div>
        <div className="w-full md:w-1/2 min-h-80">
          <div className="md:flex md:space-x-4 mb-4 md:mb-0">
            <button
              type="button"
              className="text-dark-300 text-grey-400 border-white-100 hover:bg-gray-500 focus:outline-none  font-medium rounded-lg text-xl px-5 py-3 text-center me-2 mb-2 dark:hover:text-blue-500 dark:hover:bg-white"
            >
              Relevant
            </button>
            <button
              type="button"
              className="text-dark-300 text-grey-400 border-white-100 hover:bg-gray-500 focus:outline-none  font-medium rounded-lg text-xl px-5 py-3 text-center me-2 mb-2 dark:hover:text-blue-500 dark:hover:bg-white"
            >
              Latest
            </button>
            <button
              type="button"
              className="text-dark-300 text-grey-400 border-white-100 hover:bg-gray-500 focus:outline-none  font-medium rounded-lg text-xl px-5 py-3 text-center me-2 mb-2 dark:hover:text-blue-500 dark:hover:bg-white"
            >
              Top
            </button>
          </div>
          <Posts />
        </div>
        <div className="w-full md:w-1/4 min-h-80 hidden md:block">
          <AsideRight />
        </div>
      </div>
      <Footer />
    </>
  );
};

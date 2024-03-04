import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitch } from "react-icons/fa";

export const AsideLeft = () => {
  return (
    <>
      <div className="w-full h-auto border-current bg-white rounded-lg shadow-md p-4">
        <p className="text-2xl font-semibold p-2">
          DEV Community is a community of 1,294,319 amazing developers
        </p>
        <img
          className="rounded-lg w-full h-full "
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--MV0h6VJf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rwdadr222nahumlzn0ff.jpg"
          alt="#"
        ></img>
      </div>
      <div className="p-2 flex flex-col gap-2 text-2xl ">
        <p className="hover:underline hover:text-blue-700">🏠 Home </p>
        <p className="hover:underline hover:text-blue-700">🗃️ Reading List</p>
        <p className="hover:underline hover:text-blue-700">🎙️ Podcasts </p>
        <p className="hover:underline hover:text-blue-700">📽️ Videos </p>
        <p className="hover:underline hover:text-blue-700">🏷️ Tags </p>
        <p className="hover:underline hover:text-blue-700">💡DEV help </p>
        <p className="hover:underline hover:text-blue-700">🛍️ Forem Shop </p>
        <p className="hover:underline hover:text-blue-700">
          ❤️ Advertise on DEV
        </p>
        <p className="hover:underline hover:text-blue-700">⭐ DEV Showcase </p>
        <p className="hover:underline hover:text-blue-700">About</p>
        <p className="hover:underline hover:text-blue-700">📯 Contact </p>
        <p className="hover:underline hover:text-blue-700">📖 Guides </p>
        <p className="hover:underline hover:text-blue-700">
          🤔 Software comparasions{" "}
        </p>
      </div>
      <div className="p-2 flex flex-col gap-2 text-xl">
        <h2 className="font-bold">Other</h2>
        <p>Code of conduct 👍</p>
        <p>Privacy Policy 🤓</p>
        <p>Terms of use 👀</p>
      </div>
      <div className="p-2 flex flex-row gap-2 text-stone-600">
        <FaTwitter className="h-6 w-6" />
        <FaFacebookSquare className="h-6 w-6" />
        <FaGithub className="h-6 w-6" />
        <AiFillInstagram className="h-6 w-6" />
        <FaTwitch className="h-6 w-6" />
      </div>
    </>
  );
};

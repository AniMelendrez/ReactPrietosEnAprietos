import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitch } from "react-icons/fa"

export const AsideLeft = () => {
  return (
    <>
      <div className="w-100% h-60 border-current bg-white text rounded-lg shadow-md p-4">
        <p className="text-2xl font-semibold">
          DEV Community is a community of 1,294,319 amazing developers
        </p>
      </div>
      <div className="p-2 flex flex-col gap-2">
        <p>Home 🏠</p>
        <p>Reading List 🗃️</p>
        <p>Podcasts 🎙️</p>
        <p>Videos 📽️</p>
        <p>Tags 🏷️</p>
        <p>DEV help 💡</p>
        <p>Forem Shop 🛍️</p>
        <p>Advertise on DEV ❤️</p>
        <p>DEV Showcase ⭐</p>
        <p>About</p>
        <p>Contact 📯</p>
        <p>Guides 📖</p>
        <p>Software comparasions 🤔</p>
      </div>
      <div className="p-2 flex flex-col gap-2">
        <h2 className="font-bold">Other</h2>
        <p>Code of conduct 👍</p>
        <p>Privacy Policy 🤓</p>
        <p>Terms of use 👀</p>
      </div>
      <div className="p-2 flex flex-row gap-2 text-stone-600">
        <FaTwitter className="h-5 w-5" />
        <FaFacebookSquare className="h-5 w-5" />
        <FaGithub className="h-5 w-5" />
        <AiFillInstagram className="h-5 w-5" />
        <FaTwitch className="h-5 w-5" />
        
      
      </div>
    </>
  );
};

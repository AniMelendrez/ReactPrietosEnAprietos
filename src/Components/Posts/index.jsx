import { useState, useEffect } from "react";
import { getAllPosts } from "../Api/api";

export const Posts = () => {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getAllPosts();
      console.log("Todos los posts:", data);
      setPostsList(data);
    };
    getPosts();
  }, []);

  console.log("Estado de postsList:", postsList);

  return (
    <>
      <div className="inline-flex rounded-md drop-shadow-md">
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
      <div className="inline-flex rounded-md drop-shadow-md">
        <button
          type="button"
          className="text-dark-300 text-grey-400 border-white-100 hover:bg-gray-500 focus:outline-none  font-medium rounded-lg text-xl px-5 py-3 text-center me-2 mb-2 dark:hover:text-blue-500 dark:hover:bg-white"
        >
          Week
        </button>
        <button
          type="button"
          className="text-dark-300 text-grey-400 border-white-100 hover:bg-gray-500 focus:outline-none  font-medium rounded-lg text-xl px-5 py-3 text-center me-2 mb-2 dark:hover:text-blue-500 dark:hover:bg-white"
        >
          Month
        </button>
        <button
          type="button"
          className="text-dark-300 text-grey-400 border-white-100 hover:bg-gray-500 focus:outline-none  font-medium rounded-lg text-xl px-5 py-3 text-center me-2 mb-2 dark:hover:text-blue-500 dark:hover:bg-white"
        >
          Year
        </button>
        <button
          type="button"
          className="text-dark-300 text-grey-400 border-white-100 hover:bg-gray-500 focus:outline-none  font-medium rounded-lg text-xl px-5 py-3 text-center me-2 mb-2 dark:hover:text-blue-500 dark:hover:bg-white"
        >
          Infinity
        </button>
      </div>

      <div className="max-w-auto bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fr9c933347t7shbh8x2ik.gif"
            alt=""
          />
        </a>
        <div className="flex flex-grow min-w-0 ms-5">
          <a href="#" className="pt-3">
            <img
              className="w-14 h-14 rounded-full"
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="User random"
            />
          </a>
          <p
            href="#"
            className="text-lg font-medium text-gray-700 dark:text-dark pt-3 pl-2"
          >
            Neil Sims <br />
            <a alt="date">6 febrero 2024</a>
          </p>
        </div>

        <div className="p-5">
          <a href="#">
            <h5 class="mb-2 pl-14 text-4xl font-semibold font-sans-serif tracking-tight text-gray-900 dark:text-dark hover:underline hover:text-blue-700">
              I'm Building a Full-Stack App: Here Are the Libraries I'm Going to
              Use...
            </h5>
          </a>
          <div className="pl-14 pt-5 space-x-1">
            <button
              href="#"
              class="inline-flex items-center px-5 py-3 text-lg font-medium text-center text-dark bg-white-100 rounded-lg dark:bg-white dark:hover:bg-pink-200 hover:text-white"
            >
              #wecoded
            </button>
            <button
              href="#"
              class="inline-flex items-center text-lg px-5 py-3 font-medium text-center text-dark rounded-lg dark:bg-white dark:hover:bg-purple-200 hover:text-white"
            >
              #weeklyretro
            </button>
          </div>
          <div clasName="pl-6" href="#">
            <ul>❤️✨🙌🙂 450 Reactions</ul>
          </div>
        </div>
      </div>
    </>
  );
};

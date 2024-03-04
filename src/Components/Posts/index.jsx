import React from "react";

export const Posts = ({ posts }) => {
  return (
    <>
      <div className=" max-w-auto bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100">
        <a href="#">
          <img
            className="rounded-t-lg md:h-full md:w-auto"
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
              <h5 className="mb-2 pl-14 text-4xl font-semibold font-sans-serif tracking-tight text-gray-900 dark:text-dark hover:underline hover:text-blue-700">
                {post.title}
              </h5>
            </a>
            <div className="pl-14 pt-5 space-x-1">
              {Array.isArray(post.tags) &&
                post.tags.map((tag, index) => (
                  <button
                    key={index}
                    href="#"
                    className="inline-flex items-center px-5 py-3 text-lg font-medium text-center text-dark bg-white-100 rounded-lg dark:bg-white dark:hover:bg-pink-200 hover:text-white"
                  >
                    {tag}
                  </button>
                ))}
            </div>

            <div className="pl-6" href="#">
              <ul>❤️✨🙌🙂 {post.comments} Reactions</ul>
            </div>
            <div className="pl-6" href="#">
              <ul>📅 Rating: {post.rating}</ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

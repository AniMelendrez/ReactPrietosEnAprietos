import { NavLink } from "react-router-dom";

export const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div
          key={post.key}
          className="max-w-auto bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100 my-2"
        >
          {post.postImg
 && (
            <a href="#">
              <img
                className="rounded-t-lg"
                src={post.postImg
                }
                alt="Post Image"
              />
            </a>
          )}
          <div className="flex flex-grow min-w-0 ms-5">
            <a href="#" className="pt-3">
              <img
                className="w-14 h-14 rounded-full"
                src={post.userImg}
                alt="User random"
              />
            </a>
            <p
              href="#"
              className="text-lg font-medium text-gray-700 dark:text-dark pt-3 pl-2"
            >
              {post.userName} <br />
              <a alt="date"> March {post.date}</a>
            </p>
          </div>

          <div className="p-5">
          <NavLink to={`/postdetail/${post.key}`}>
            <h5 className="mb-2 pl-14 text-4xl font-semibold font-sans-serif tracking-tight text-gray-900 dark:text-dark hover:underline hover:text-blue-700">
            {post.title}
            </h5>
          </NavLink>

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

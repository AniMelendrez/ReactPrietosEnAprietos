import React, { useEffect, useState } from "react";
import { Navbar } from "../../Components/NavBar";
import { useParams } from "react-router-dom";
import { getPostById } from "../API/api";

export const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await getPostById(postId);
        setPost(postData);
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-grow py-1 my-6 px-40 space-x-10 h-full static">
        <div className="flex flex-grow py-20 px-50 w-2/4 min-h-80">
          <div className="max-w-auto bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100">
            {post.postimg && (
              <a href="#">
                <img className="rounded-t-lg" src={post.postimg} alt="" />
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
                <span alt="date">{post.date}</span>
              </p>
            </div>

            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 pl-14 text-4xl font-semibold font-sans-serif tracking-tight text-gray-900 dark:text-dark hover:underline hover:text-blue-700">
                  {post.title}
                </h5>
              </a>
              <div className="text-xl text-justify">
                <p>{post.txt}</p>
              </div>
              {/* Renderizar comentarios */}
              <div className="text-xl text-justify">
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-grow py-10 px-10 h-full w-10 m-2 min-h-9">
          <div className="px-20 pt-4 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100 ">
            <div className="flex flex-col items-center p-6 w-56">
              <img
                className="w-32 h-32 mb-3 rounded-full shadow-lg"
                src={post.userImg}
                alt="User image"
              />
              <h5 className="mb-3 text-2xl font-medium text-gray-900 dark:text-dark">
                {post.userName}
              </h5>
              <div className="flex flex-col space-y-4 mx-auto">
                <button className="bg-blue-700 rounded-lg text-white p-2 mx-10">
                  Follow Me
                </button>
                <button className="bg-blue-700 rounded-lg p-2 text-white mx-10">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

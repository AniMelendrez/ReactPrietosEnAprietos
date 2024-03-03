import { Navbar } from "../../Components/NavBar";

export const PostDetail = () => {
  //console.log(postsList);
  return (
    <>
      <Navbar />
      <div className=" flex flex-grow py-1 px-40 space-x-10 h-full static">
        <div className=" flex flex-grow py-20 px-50 w-1/4 min-h-80">
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
                  I'm Building a Full-Stack App: Here Are the Libraries I'm
                  Going to Use...
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
              <div clasName="p-3" href="#">
                <p>❤️✨🙌🙂</p>
              </div>
            </div>
            <div className="text-xl text-justify px-20 ">
              <p>
                API error handling is a critical aspect of software development,
                ensuring smooth operation and reliability in applications. When
                integrating with APIs, developers inevitably encounter errors,
                ranging from simple validation issues to complex server
                failures. Understanding how to effectively handle these errors
                is paramount for maintaining the functionality and user
                experience of an application. In this article, we'll delve into
                the world of API error handling, exploring various techniques
                and best practices. As developers we can employ these to
                mitigate errors and enhance the robustness of our applications.
                From understanding common error types to implementing robust
                error handling mechanisms, we'll cover a wide array of topics.
                This will enable developers to confidently address any
                challenges encountered during error handling.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-grow py-20 px-20 h-full w-40 min-h-9">
          <div class=" px-20 pt-4 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100 ">
            <div class="flex flex-col items-center pt-6 w-96">
              <img
                class="w-40 h-40 mb-3 rounded-full shadow-lg"
                src="https://randomuser.me/api/portraits/women/17.jpg"
                alt="Bonnie image"
              />
              <h5 class="mb-3 text-3xl font-medium text-gray-900 dark:text-dark">
                Bonnie Green
              </h5>
              <span class="text-xl text-gray-500 dark:text-gray-00  mb-4 ">
                Visual Designer
              </span>
              <div class="flex flex-col space-y-4 mx-auto">
                <button class="text-xl font-medium bg-blue-700 rounded-lg py-3 mx-50">
                  Follow Me
                </button>
                <button class="text-xl font-medium bg-blue-700 rounded-lg py-3 mx-50">
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

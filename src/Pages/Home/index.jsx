import React, { useEffect, useState } from "react";
import { Navbar } from "../../Components/NavBar";
import { Footer } from "../../Components/footer";
import { AsideLeft } from "../../Components/Aside Left";
import { AsideRight } from "../../Components/Aside Right";
import { Posts } from "../../Components/Posts";
import { getAllPosts } from "../API/api";

export const Home = () => {
  const [postsList, setPostsList] = useState([]);
  const [postsOpenSource, setPostsOpenSource] = useState([]);
  const [postsOpenSourceTitles, setPostsOpenSourceTitles] = useState([]);
  const [postsOpenSourceComments, setPostsOpenSourceComments] = useState([]);
  const [ratings, setRatings] = useState({});
  const [filteredPosts, setFilteredPosts] = useState([]); // Agregamos el estado para los posts filtrados

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPosts();
        console.log("Todos los posts:", data);
        setPostsList(data);
        const openSourcePosts = data.filter(
          (post) => post.tags && post.tags.includes("#opensource")
        );
        setPostsOpenSource(openSourcePosts);
        setPostsOpenSourceTitles(openSourcePosts.map((post) => post.title));
        setPostsOpenSourceComments(
          openSourcePosts.map((post) => post.comments)
        );

        // Generar y almacenar ratings aleatorios
        const ratingsObj = {};
        data.forEach((post) => {
          ratingsObj[post.key] = Math.floor(Math.random() * 10) + 1; // Calificación del 1 al 10
        });
        setRatings(ratingsObj);
      } catch (error) {
        console.error("Error al obtener los posts:", error);
      }
    };

    fetchData();
  }, []);

  const sortByRelevance = () => {
    // Ordenar los posts por número de comentarios
    const sortedPosts = [...postsList].sort((a, b) => {
      // Convertir 'comments' en números antes de comparar
      const commentsA = parseInt(a.comments);
      const commentsB = parseInt(b.comments);
      return commentsB - commentsA;
    });
    setPostsList(sortedPosts);
  };

  const sortByLatest = () => {
    // Ordenar los posts por fecha (latest)
    const sortedPosts = [...postsList].sort((a, b) => {
      // Convertir las fechas en formato de cadena en objetos Date antes de comparar
      const dateA = new Date(parseInt(a.date));
      const dateB = new Date(parseInt(b.date));
      return dateB - dateA;
    });
    setPostsList(sortedPosts);
  };

  const sortByTop = () => {
    // Ordenar los posts por rating (top)
    const sortedPosts = [...postsList].sort((a, b) => {
      return ratings[b.key] - ratings[a.key];
    });
    setPostsList(sortedPosts);
  };

  return (
    <>
      <Navbar posts={postsList} setFilteredPosts={setFilteredPosts} />
      <br />
      <div className="flex flex-row py-16 px-10 space-x-9 h-full static">
        <div className="w-1/5 min-h-80">
      <div className="flex flex-col md:flex-row py-20 px-4 md:px-20 space-y-4 md:space-y-0 md:space-x-9 h-full">
        <div className="w-full md:w-1/4 min-h-80 hidden md:block">
          <AsideLeft />
        </div>
        <div className="w-3/5 min-h-80">
          <div className="md:flex md:space-x-4 mb-4 md:mb-0">
            <button
              type="button"
              onClick={sortByRelevance}
              className="text-dark-300 text-grey-400 border-white-100 hover:bg-gray-500 focus:outline-none  font-medium rounded-lg text-xl px-5 py-3 text-center me-2 mb-2 dark:hover:text-blue-500 dark:hover:bg-white"
            >
              Relevant
            </button>
            <button
              type="button"
              onClick={sortByLatest}
              className="text-dark-300 text-grey-400 border-white-100 hover:bg-gray-500 focus:outline-none  font-medium rounded-lg text-xl px-5 py-3 text-center me-2 mb-2 dark:hover:text-blue-500 dark:hover:bg-white"
            >
              Latest
            </button>
            <button
              type="button"
              onClick={sortByTop}
              className="text-dark-300 text-grey-400 border-white-100 hover:bg-gray-500 focus:outline-none  font-medium rounded-lg text-xl px-5 py-3 text-center me-2 mb-2 dark:hover:text-blue-500 dark:hover:bg-white"
            >
              Top
            </button>
          </div>
          <Posts
            posts={filteredPosts.length > 0 ? filteredPosts : postsList.map((post) => ({
              key: post.key,
              title: post.title ?? "",
              tags: post.tags ?? "",
              userName: post.userName ?? "",
              userImg: post.userImg ?? "",
              postImg: post.postimg ?? "",
              text: post.txt ?? "",
              comments: post.comments ?? "",
              date: post.date ?? "",
              rating: ratings[post.key] ?? 0, // Utiliza el rating almacenado
            }))}
          />
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

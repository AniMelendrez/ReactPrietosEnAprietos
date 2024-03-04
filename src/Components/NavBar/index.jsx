import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";

export const Navbar = ({ posts, setFilteredPosts }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    filterPosts(event.target.value);
  };

  const filterPosts = (searchTerm) => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  const activeStyle = "underline underline-offset-4";

  return (
    <nav
      id="nav"
      className="bg-white/90 backdrop-blur-md border border-stone-300 flex justify-between items-center fixed z-10 top-0 w-full py-2.5 px-8 text-base"
    >
      <ul className="flex sm:hidden">
        <li className="flex sm:hidden ">
          <CiMenuBurger className="w-8 h-8" />
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-2xl">
          <NavLink to="/">
            <img
              className="h-10 w-15 pl-20"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt=""
            />
          </NavLink>
        </li>
        <li>
          <input
            placeholder="Search"
            className="border border-stone-300 rounded-lg h-10 w-72 p-2 bg-white"
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
          />
        </li>
      </ul>

      <ul className="flex items-center gap-3  pr-20">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Log In
        </button>
        <li className="hidden sm:block">
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Create Account
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

import { useState } from "react";
import { useEffect } from "react";
import {getAllPosts} from "../Api/api"

export const Post = () => {
    const [postsList, setPostsList] = useState([]);

    useEffect(() => {
      const getPosts = async () => {
        const data = await getAllPosts();
        setPostsList(data);
      };
      getPosts();
    }, []);
  
    console.log(postsList);
    return(
        <h1>Aquí el post</h1>
    )
}
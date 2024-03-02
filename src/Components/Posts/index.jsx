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
            <h1>Posts</h1>
        </>
    );
};
import { useState } from "react";
import { useEffect } from "react";
import {getAllPosts} from "../../Components/Api/api"

export const AsideRight = (props) => {
    const [postsList, setPostsList] = useState([]);

    useEffect(() => {
      const getPosts = async () => {
        const data = await getAllPosts();
        setPostsList(data);
      };
      getPosts();
    }, []);

    return(
        <>
            <h1>Right</h1>
        </>
    )
}
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
        <div className="bg-white m-4">
            <h1 className="font-bold text-xl">#wecoded</h1>
            <p className="text-stone-600 text-sm">we_coded is a celebration of individuals who are underrepresented and otherwise marginalized in software development on the basis of gender: including women, transgender, nonbinary, gender non-conforming, and two spirit people.</p>
            <hr />
            <p>31 Women in Tech Content Creators to Follow Now</p>
        </div>
    )
}
import { useState } from "react";
import { useEffect } from "react";
import {getAllPosts} from "../../Components/Api/api"

export const AsideRight = (props) => {
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

    const postsOpenSource = postsList.filter(post => post.tags && post.tags.includes("#opensource"));
    console.log(postsOpenSource)

    const postsOpenSourceTitles = postsOpenSource.map(post => post.title);
    console.log(postsOpenSourceTitles[0])

    const postsOpenSourceComments = postsOpenSource.map(post => post.comments);
    console.log(postsOpenSourceTitles[0])

    return(
        <div>
            <div className="bg-white p-4 border border-slate-300 rounded-lg">
                <h1 className="font-bold text-xl">#wecoded</h1>
                <p className="text-stone-600 text-sm">we_coded is a celebration of individuals who are underrepresented and otherwise marginalized in software development on the basis of gender: including women, transgender, nonbinary, gender non-conforming, and two spirit people.</p>
                <hr />
                <p className="text-normal ">{postsOpenSourceTitles[0]}</p>
                <p className="text-sm text-stone-600">{postsOpenSourceComments[0]} comments</p>
                <hr />
                <p className="text-normal ">{postsOpenSourceTitles[1]}</p>
                <p className="text-sm text-stone-600">{postsOpenSourceComments[1]} comments</p>
                <hr />
                <p className="text-normal ">{postsOpenSourceTitles[2]}</p>
                <p className="text-sm text-stone-600">{postsOpenSourceComments[2]} comments</p>
                <hr />
            </div>
            <p className="font-bold my-2">trending guides/resources</p>
            <p className="bg-gray-200 p-2 hover:bg-white my-1">Advanced End-to-End DevOps Project: Deploying A Microservices APP To AWS EKS using Terraform, Helm, Jenkins And ArgoCD (Part I)</p>
            <p className="bg-gray-200 p-2 hover:bg-white my-1">Cloud-Native Is In Shambles</p>
            <p className="bg-gray-200 p-2 hover:bg-white my-1">Skills to become a backend developer in 6 months (roadmap)</p>
            <p className="bg-gray-200 p-2 hover:bg-white my-1">Git Good: Best Practices for Branch Naming and Commit Messages</p>
            <p className="bg-gray-200 p-2 hover:bg-white my-1">Understanding event driven architecture</p>
            <hr className="border border-stone-300"/>
            <p className="font-bold my-2">recently queried</p>
            <p className="bg-gray-200 p-2 hover:bg-white my-1">Spotify Shuffle Sucks</p>   
            <p className="bg-gray-200 p-2 hover:bg-white my-1">Haiku Checker</p> 
            <p className="bg-gray-200 p-2 hover:bg-white my-1">Vscode Vim</p> 
            <p className="bg-gray-200 p-2 hover:bg-white my-1">&Nbsp Meaning</p> 
            <p className="bg-gray-200 p-2 hover:bg-white my-1">Atom Text Editor</p> 
            <p className="bg-gray-200 p-2 hover:bg-white my-1">Slack Screen Sharing</p>     
        </div>
        
    )
}
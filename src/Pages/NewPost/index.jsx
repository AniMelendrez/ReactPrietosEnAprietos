import React from "react";
import { AiFillPicture } from "react-icons/ai";
import { FaBold, FaItalic, FaLink } from "react-icons/fa";
import { GrOrderedList } from "react-icons/gr";
import { LuSquareCode } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { saveUser } from "../API/api";
import { NavLink } from "react-router-dom"; // Importar Redirect

export const NewPost = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [redirect, setRedirect] = React.useState(false); // Estado para redireccionar

    const onSubmit = async (data) => {
        console.log(data);
        const formattedData = {
            title: data.postTitle,
            txt: data.postContent,
            tags: data.tags.split(" "),
            userImg: data.userImg,
            userName: data.userName,
            postimg: data.postImg,
            comments: Math.floor(Math.random() * 10) + 1, // Valor aleatorio entre 1 y 10
            date: data.date, // Utilizar el valor ingresado en el input de fecha
        };
        const response = await saveUser(formattedData);
        console.log(response);
        setRedirect(true); // Establecer el estado de redirección a true después de enviar el formulario
    };

    const handleRevertChanges = () => {
        reset(); // Reiniciar todos los campos del formulario
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row w-full justify-between">
                <div className="flex flex-col items-start w-3/4">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-4 m-4">
                            <NavLink to="/">
                                <img
                                    className="h-10 w-15"
                                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                                    alt="Dev logo"
                                />
                            </NavLink>
                            <h1 className="p-2 font-bold">Create Post</h1>
                        </div>
                        <div className="">
                            <button className="m-4 p-2">Edit</button>
                            <button className="m-4 p-2">Preview</button>
                        </div>
                    </div>
                    <div className="bg-white border border-slate-400 rounded-lg flex flex-col w-3/4 mx-20">
                        <input {...register("userName")} className="p-2" placeholder="User name" type="text" />
                        <input {...register("userImg")} className="p-2" placeholder="User img" type="text" />
                        <input {...register("postTitle")} className="my-2 p-2 placeholder:font-bold placeholder:text-4xl" placeholder="New post title here..." type="text" />
                        <div className="bg-slate-100 flex flex-row gap-4">
                            <FaBold className="h-5 w-5 m-2 ml-10" />
                            <FaItalic className="h-5 w-5 m-2" />
                            <FaLink className="h-5 w-5 m-2" />
                            <GrOrderedList className="h-5 w-5 m-2" />
                            <LuSquareCode className="h-5 w-5 m-2" />
                            <AiFillPicture className="h-5 w-5 m-2" />
                        </div>
                        <input {...register("tags")} className="my-1 p-2" placeholder="Add up to 3 tags separated by spaces" type="text" />
                        <input {...register("postImg")} className="my-1 p-2" placeholder="Post image URL" type="text" />
                        <input {...register("date")} className="my-1 p-2" placeholder="Post date" type="text" />
                        <textarea {...register("postContent")} className="mb-4 p-2" placeholder="Write your post content here" />
                    </div>
                    <div className="mx-20">
                        <button type="submit" className="m-4 bg-blue-500 p-3 rounded-lg text-white font-bold">Publish</button>
                        
                        <button className="m-4">Save Draft</button>
                        <button type="button" onClick={handleRevertChanges}>Revert new changes</button>
                    </div>
                </div>

                <div className="w-1/4 p-10 place-content-center">
                    <h2 className="font-bold">Writing a Great Post Title</h2>
                    <ul className="list-disc list-inside text-stone-600">
                        <li>
                            Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.
                        </li>
                        <li>
                            Use keywords where appropriate to help ensure people can find your post by search.
                        </li>
                    </ul>
                </div>
            </div>
        </form>
    );
};

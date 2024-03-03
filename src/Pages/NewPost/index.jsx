import { AiFillPicture } from "react-icons/ai";
import { FaBold, FaItalic } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { GrOrderedList } from "react-icons/gr";
import { LuSquareCode } from "react-icons/lu";

export const NewPost = () => {
    return(
        <div className="flex flex-row w-full justify-between">
            <div className="flex flex-col items-start w-3/4">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-4 m-4">
                        <img
                            className="h-10 w-15"
                            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                            alt=""
                        />
                        <h1 className="p-2 font-bold">Create Post</h1>
                    </div>
                    <div className="">
                        <button className="m-4 p-2">Edit</button>
                        <button className="m-4 p-2">Preview</button>
                    </div>
                </div>
                <div className="bg-white border border-slate-400 rounded-lg flex flex-col w-3/4 mx-20">
                    <input className="p-4" placeholder="User name" type="text" name="" id="" />
                    <input className="p-4" placeholder="User img" type="text" name="" id="" />
                    <input className="my-4 p-4 placeholder:font-bold placeholder:text-4xl" placeholder="New post title here..." type="text" name="" id="" />
                    <div className="bg-slate-100 flex flex-row gap-4">
                        <FaBold className="h-5 w-5 m-2 ml-10"/>
                        <FaItalic className="h-5 w-5 m-2"/>
                        <FaLink className="h-5 w-5 m-2"/>
                        <GrOrderedList className="h-5 w-5 m-2"/>
                        <LuSquareCode className="h-5 w-5 m-2"/>
                        <AiFillPicture className="h-5 w-5 m-2"/>
                    </div>
                    <input className="my-2 p-4" placeholder="Add up to 3 tags" type="text" name="" id="" />
                    <input className="mb-10 p-4" placeholder="Write your post content here" type="text" name="" id="" />
                </div>
                <div className="mx-20">
                    <button className="m-4 bg-blue-500 p-3 rounded-lg text-white font-bold">Publish</button>
                    <button className="m-4">Save Draft</button>
                    <button>Revert new changes</button>
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
    );
};
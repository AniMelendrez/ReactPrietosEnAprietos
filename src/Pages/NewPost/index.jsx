export const NewPost = () => {
    return(
        <div className="flex flex-row w-full justify-between">
            <div className="flex flex-col items-start w-3/4">
                <div className="flex flex-row">
                    <div className="flex flex-row gap-4 m-4 items-center">
                        <img
                            className="h-10 w-15"
                            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                            alt=""
                        />
                        <h1 className="p-2 font-bold">Create Post</h1>
                    </div>
                    <div>
                        <button className="m-4 p-2">Edit</button>
                        <button className="m-4 p-2">Preview</button>
                    </div>
                </div>
                <div className="bg-white p-4 border border-slate-400 rounded-lg flex flex-col w-3/4 m-4">
                    <input className="my-4" placeholder="New post title here" type="text" name="" id="" />
                    <input className="my-4" placeholder="Add up to 3 tags" type="text" name="" id="" />
                    <input className="my-4" placeholder="Write your post content here" type="text" name="" id="" />
                </div>
                
            </div>
            
            <div className="w-1/4 p-10 place-content-center">
                <p>Writing a Great Post Title
                    Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.
                    Use keywords where appropriate to help ensure people can find your post by search.</p>
            </div>
            
        </div>
    );
};
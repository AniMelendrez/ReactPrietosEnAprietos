const getAllPosts = async () => {
  const response = await fetch(
    "https://javascript-challenge-f0392-default-rtdb.firebaseio.com/posts.json"
  );
  const data = await response.json();
  const formattedData = Object.keys(data).map((key) => ({
    key,
    ...data[key],
  }));
  console.log(formattedData);
  return formattedData;
};
  
  const saveUser = async (userObject) => {
    const response = await fetch(
      "https://javascript-challenge-f0392-default-rtdb.firebaseio.com/posts.json",
      {
        method: "POST",
        body: JSON.stringify(userObject),
      }
    );
    const data = response.json();
    return data;
  };

  const getPostById = async (postId) => {
    const response = await fetch(
      `https://javascript-challenge-f0392-default-rtdb.firebaseio.com/posts/${postId}.json`
    );
    const postData = await response.json();
    return { key: postId, ...postData };
  };
  

  export {saveUser, getAllPosts, getPostById}
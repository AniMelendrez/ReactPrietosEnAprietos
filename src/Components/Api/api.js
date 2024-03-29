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

export {getAllPosts}
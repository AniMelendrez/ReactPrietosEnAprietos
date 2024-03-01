import { useRoutes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Home } from "../Home";
import { SignIn } from "../SignIn";
import { NewPost } from "../NewPost";
import { Post } from "../Post/Index";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/SignIn", element: <SignIn /> },
    { path: "/NewPost", element: <NewPost /> },
    { path: "/Post", element: <Post /> },
  ]);

  return routes;
};

function App() {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://javascript-challenge-f0392-default-rtdb.firebaseio.com/posts.json"
      );
      const data = await response.json();
      console.log(data);
      /* ["user1","user2"]*/ /*data[key] se convierte en {name:"...", picture:"..."}*/
      const formattedData = Object.keys(data).map((key) => ({
        key,
        ...data[key],
      }));
      console.log(formattedData);
      setPostsList(formattedData);
    };
    getUsers();
  }, []);

  console.log(postsList);
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

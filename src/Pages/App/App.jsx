import { useRoutes, BrowserRouter } from "react-router-dom";
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
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

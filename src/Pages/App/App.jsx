import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { SignIn } from "../SignIn";
import { NewPost } from "../NewPost";
import { PostDetail } from "../PostDetail/Index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/NewPost" element={<NewPost />} />
      <Route path="/postdetail/:postId" element={<PostDetail />} />
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from './pages/DefaultLayout';
import HomePages from './pages/HomePage';
import PostPages from './pages/PostPages';
import SinglePostPage from './pages/SinglePostPage';
import { AuthProvider } from "./contexts/AuthContext";

function App() {


  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<HomePages />}></Route>
              <Route path='/post' element={<PostPages />}></Route>
              <Route path='/post/:slug' element={<SinglePostPage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
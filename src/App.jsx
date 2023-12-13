import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from './pages/DefaultLayout';
import HomePages from './pages/HomePage';
import PostPages from './pages/PostPages';
import SinglePostPage from './pages/SinglePostPage';
import DashboardLayout from './pages/DashboardLayout';
import Dashboard from "./pages/Dashboard";
import LogIn from "./pages/LogIn";
import PrivatePages from "./middlewares/PrivatePages";
import { AuthProvider } from "./contexts/AuthContext";

function App() {


  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<HomePages />}></Route>
              <Route path='/post' element={<PostPages />}></Route>
              <Route path='/login' element={<LogIn/>}></Route>
              <Route path='/post/:slug' element={<SinglePostPage />}></Route>
            </Route>
            <Route
              path="/admin"
              element={
                <PrivatePages>
                  <DashboardLayout />
                </PrivatePages>
              }
            >
              <Route index element={<Dashboard />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
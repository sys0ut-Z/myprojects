import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
// import Blogs from './components/Blogs/Blogs'
import BlogDetails from './pages/BlogDetails'
import AboutCars from './pages/AboutCars'
import PreviewImages from './pages/PreviewImages'
import ErrorPage from './pages/ErrorPage'
import Layout from './pages/Layout'
import BlogsComp from './pages/BlogsComp'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/blogs" element={<BlogsComp />}/>
        <Route path="/blogs/:title" element={<BlogDetails />}/>
        <Route path="/about-cars" element={<AboutCars />}/>
        <Route path="/preview-imgs" element={<PreviewImages />} />
        <Route path="/*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default App

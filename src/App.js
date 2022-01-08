import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Post from './components/Post/Post';
import Notfound from './components/Notfound/Notfound';

function App() {
  return (
    <BrowserRouter className="container-fluid p-0">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/post/:id" element={<Post></Post>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

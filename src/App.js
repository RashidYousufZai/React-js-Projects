import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, About, Products, Contact, SinglePageProduct, Cart, Profile, ErrorPage } from "./pages/index"
import Navbar from './component/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/singleproduct/:id' element={<SinglePageProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

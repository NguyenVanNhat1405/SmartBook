import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Book from './Pages/Book';
import Category from './Pages/Category';
import Footer from '../src/Components/Footer/Footer'
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import in_banner from './Components/Assets/banner_in.jpg'
import on_banner from './Components/Assets/banner_on.jpg'
function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/in' element={<Category banner={in_banner} category="in"/>} /> 
          <Route path='/on' element={<Category banner={on_banner} category="on"/>} />
          {/* <Route path='/3' element={<Category category="3"/>} /> */}
          <Route path='/book' element={<Book/>}>
            <Route path=':bookId' element={<Book/>} />
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />
        </Routes>
          <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;

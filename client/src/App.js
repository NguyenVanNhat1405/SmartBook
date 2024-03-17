import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Book from './Pages/Book';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/books' element={<Category category="book"/>} /> 
          <Route path='/contact' element={<Category category="contact" />} />
          <Route path='/book' element={<Book/>}>
            <Route path=':bookId' element={<Book/>} />
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

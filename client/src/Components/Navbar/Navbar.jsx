import React, {useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.icon'
import cart from '../Assets/cart.icon'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
      <div className="nav-logo">
      <img src={logo} alt="" />
      <p>SmartBook</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}>
          <Link to ='/'>Home</Link>{menu==="home"?<hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu("book")}}>
          <Link to ='/book'>Book</Link>{menu==="book"?<hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu("contact")}}>
         <Link to ='/contact'>Contact</Link> {menu==="contact"?<hr/>:<></>}
        </li>
      </ul>
      <div className='nav-cart'>
        <Link to ='/login'><button>Login</button></Link>
        <Link to ='cart'><img src={cart} alt=''/></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
     )
}

export default Navbar

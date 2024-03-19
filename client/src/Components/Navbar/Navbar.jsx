import React, {useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart from '../Assets/cart.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
      
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}>
          <Link style={{ textDecoration: 'none'}} to ='/'>
            <div className="nav-logo">
              <img src={logo} alt="" />
          </div>
          </Link>{menu==="home"?<hr/>:<></>}
          </li>
        <li> 
          <input type="text" placeholder="Search..." />
        </li>
        <li onClick={()=>{setMenu("notify")}}>
          <Link style={{ textDecoration: 'none'}} to ='/notify'>Notify</Link>{menu==="notify"?<hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu("notify")}}>
          <Link style={{ textDecoration: 'none'}} to ='/notify'>Notify</Link>{menu==="notify"?<hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu("notify")}}>
          <Link style={{ textDecoration: 'none'}} to ='/notify'>Notify</Link>{menu==="notify"?<hr/>:<></>}
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

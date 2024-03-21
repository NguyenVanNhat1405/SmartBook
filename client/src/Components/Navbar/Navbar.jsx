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
          </Link>{menu==="home"}
        </li>
        <li> 
          <input type="text" placeholder="Nhập sách cần tìm...." />
        </li>
        {/* <li onClick={()=>{setMenu("home")}}>
          <Link style={{ textDecoration: 'none'}} to ='/'> Home</Link>{menu==="home"?<hr/>:<></>}
        </li> */}
        <li className="nav" onClick={()=>{setMenu("in")}}>
          <Link style={{ textDecoration: 'none'}} to ='/in'><span>Sách Việt Nam</span></Link>{menu==="in"}
        </li>
        <li className="nav" onClick={()=>{setMenu("on")}}>
          <Link style={{ textDecoration: 'none'}} to ='/on'><span>Sách Nước Ngoài</span></Link>{menu==="on"}
        </li>
      </ul>
      <div className='nav-cart'>
        <Link to ='/login'><button>Đăng Nhập</button></Link>
        <Link to ='cart'><img src={cart} alt=''/></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
     )
}

export default Navbar

import {Link,useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import './inde.css'

const Header = ()=> {
      const navigate = useNavigate() 

      const onClickLogout = () => {
             Cookies.remove("jwt_token")
             navigate("/login")
      }

      return (
      <div className="nav-container">
            <Link to="/" className="nav-link"> <img className='website-logo' src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="website logo" /> </Link>
            <div className='nav-items-container'>
            <Link to="/" className="nav-link">  <span className='nav-item'>Home</span></Link>
            <Link to="/products" className="nav-link"><span className='nav-item'>Products</span></Link>
            <Link to="/cart" className="nav-link"><span className='nav-item'>Cart</span></Link>
            <button onClick={onClickLogout} className='btn btn-primary m-2' type='button'>Logout</button>
            </div>
      </div>
)
      }

export default Header
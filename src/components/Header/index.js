import {Link} from 'react-router-dom'
import './inde.css'

const Header = ()=> (
      <div className="nav-container">
            <Link to="/" className="nav-link"> <img className='website-logo' src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="website logo" /> </Link>
            <div className='nav-items-container'>
            <Link to="/" className="nav-link">  <span className='nav-item'>Home</span></Link>
            <Link to="/products" className="nav-link"><span className='nav-item'>Products</span></Link>
            <Link to="/cart" className="nav-link"><span className='nav-item'>Cart</span></Link>
            <button className='btn btn-primary m-2' type='button'>Logout</button>
            </div>
      </div>
)

export default Header
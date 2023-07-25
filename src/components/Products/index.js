import Header from "../Header"
import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import AllProductsSection from '../AllProductsSection'
import "./index.css"

const Products = ()=> { 
      const jwtToken = Cookies.get("jwt_token")
            if (jwtToken === undefined){
            return <Navigate replace to="/login" />
            }
      return (
      <>
      <Header />
      <div className="products-container">
            <AllProductsSection />
      {/* <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
        className="products-img"
      /> */}
    </div>
      </>
      )
}

export default Products
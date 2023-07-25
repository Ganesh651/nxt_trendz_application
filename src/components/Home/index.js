import {Link, Navigate} from 'react-router-dom'
import Cookies  from 'js-cookie'
import Header from '../Header'
import './index.css'

const Home = ()=>{
            const jwtToken = Cookies.get("jwt_token")
            if (jwtToken === undefined){
            return <Navigate replace to="/login" />
            }
            return (<>
            <Header/>
            <div className='home-container'>
                  <div>
                        <h1 className='home-page-heading'>Clothes That Get YOU Noticed</h1>
                        <p className='home-page-description'>Fashion is part of the daily air and it does not quite help that it changes all the time. Clothes have always been a marker of the era and we are in a revolution. Your fashion makes you been seen and heard that way you are. So, celebrate the seasons new and exciting fashion in your own way.</p>
                       <Link to="/products"><button type="button" className='btn btn-primary'>Shop Now</button></Link>
                  </div>
                  <img className='trenz-home-image' src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" alt="clothes that get you noticed" />
            </div>
            </>
     ) 
}


export default Home
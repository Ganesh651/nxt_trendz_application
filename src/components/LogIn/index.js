import {useState} from "react"
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogIn = (props)=>{ 
      const [username, setUsername] = useState("")
      const [password, setPassword] = useState("")
      const [showErrorMessage, setShowErrorMessage] = useState(false)
      const [errorMessage, setErrorMessage] = useState("")
      const navigate = useNavigate()

      const  onChangeUsername = event =>{
            setUsername(event.target.value)
      }
      
      const  onChangePassword = event =>{
            setPassword(event.target.value)
      }

      const onSuccessView = jwtToken =>{
            Cookies.set("jwt_token", jwtToken, {expires:10})
           navigate("/", {replace:true})
      }

    const  onFailureView = (errorMessage)=>{
      setShowErrorMessage(true)
      setErrorMessage(errorMessage)
      }

    const  onFormSubmit = async event =>{
            event.preventDefault()
            const userDetails = {username,password}
            const url = "https://apis.ccbp.in/login"
            const option = {
                  method: "POST",
                  body: JSON.stringify(userDetails)
                  
            }
            const response = await fetch(url,option)
            const data = await response.json()

            if (response.ok === true){
                  onSuccessView(data.jwt_token)
            }else{
                  onFailureView(data.error_msg)
            }
           
      }
            return (
                  <div className='login-container'>
                        <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" 
                        alt="website logo"
                        className='website-image' />
                        <form onSubmit={onFormSubmit} className='form-container'>
                              <div className='form-image-container'>
                              <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" 
                              alt="website logo" 
                              className='form-logo' />
                              </div>
                        <div className='input-container'>
                              <label className='label-text' htmlFor='username'>USERNAME</label><br/>
                              <input value={username} 
                              onChange={onChangeUsername} 
                              placeholder='Username' 
                              className='input' 
                              type="text" 
                              id="username"/>
                        </div>
                        <div className='input-container'>
                              <label className='label-text' htmlFor='password'>PASSWORD</label><br/>
                              <input value={password}
                              onChange={onChangePassword}
                              placeholder='Password'
                              className='input'
                              type="password" 
                              id="password"/>
                        </div>
                        <button type="submit" className='login-btn'>Login</button>
                        {showErrorMessage && <p className='error-message'>*{errorMessage}</p>}
                        </form>
                  </div>
            )
      
}

export default LogIn
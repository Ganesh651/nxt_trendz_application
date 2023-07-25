import { useEffect,useState } from "react";
import Cookies  from "js-cookie";
import './index.css'


const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE"
}

const AllProductsSection = ()=>{
      const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    data: null,
    errorMsg: null
  })

      useEffect(()=>{
            const getProductsData = async ()=>{
                  setApiResponse({
        status: apiStatusConstants.inProgress,
        data: null,
        errorMsg: null,
      })

            const url = "https://apis.ccbp.in/products"
            const jwtToken = Cookies.get("jwt_token")
            const options = {
                  headers: {
                        Authorization: `Bearer ${jwtToken}`
                  }
            }
            const response = await fetch(url,options)
            const data = await response.json()
            
            if (response.ok === true){
                  setApiResponse(prevApiStatus=>({
                        ...prevApiStatus,
                        status: apiStatusConstants.success,
                        data: data,
                  }))
            }else{
                  setApiResponse(prevApiStatus=>({
                        ...prevApiStatus,
                        status: apiStatusConstants.failure,
                        errorMsg: data.error_msg,
                  }))
            }
      }

      getProductsData()
      
 },[])

      return <h1>Ganesh</h1>
}

export default AllProductsSection
import React from 'react'
import logo from "../assets/Untitled-removebg-preview.png"
import {useStore} from "../store/store"
function Login() {
  const {login, setLoading} = useStore()
   const handleClick =async ()=>{
    try{
      setLoading(true)
     await login()
    }catch(err){
       alert(err)
       
    }
   setLoading(false)
  }
    return (
        <div className="h-screen flex flex-wrap flex-col ">
        <div className=" bg-gray-900 h-screen"><img className="mt-8 mx-auto h-3/5 " src={logo}/><div className="text-center"><button onClick={handleClick} className="bg-gray-800 mx-auto mt-14  w-5/6 py-3 text-white font-sans font-bold rounded-3xl">Log in</button></div></div>
      </div>
    )
}

export default Login

import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link} from "react-router-dom"
import {useStore} from "../store/store"
function Navbar() {
    const {logout} = useStore()
    const history = useHistory()
    const location = useLocation()
     return (
        location.pathname==="/"?<nav className=" mb-6 flex flex-wrap flex-row">
        <h1 className=" mt-3 font-sans text-4xl text-white w-1/3 ml-3">Around</h1>
        <button onClick={()=>{logout()}} className="mt-3 px-3 text-lg text-gray-200 ml-auto mr-3"> sign out</button>
    </nav>:<nav className=" mb-6 flex flex-wrap flex-row">
    <Link onClick={()=>history.goBack()} className="mt-5 px-3 text-lg text-gray-200  mr-3"><button  > <ArrowBackIosIcon/></button></Link>
        <h1 className=" mt-3 font-sans text-4xl text-white w-1/3 ml-3">Around</h1>
        <button onClick={()=>{logout()}} className="mt-3 px-3 text-lg text-gray-200 ml-auto mr-3"> sign out</button>
    </nav>
    )
}

export default Navbar

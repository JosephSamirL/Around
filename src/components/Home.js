import React from 'react'
import Navbar from './Navbar'
import {Link} from "react-router-dom"
import FadeIn from 'react-fade-in'
function Home() {
    return (
        <div style={{backgroundColor:"#212121"}} className="w-screen h-screen ">
           <Navbar></Navbar>
           <FadeIn>
            <Link to="/myrooms/"><div  className="mx-auto bg-blue-500 h-52 w-5/6 py-11 mt-5 rounded-xl ">
            <span className="text-4xl font-semibold text-gray-900 ml-10 ">My Rooms/</span>
            </div>
            </Link>
            
           <Link to="/allrooms"> <div  className="mx-auto bg-red-500 h-32 w-5/6 py-11 mt-3 rounded-xl ">
            <span className="text-4xl font-semibold text-gray-900 ml-10 ">All Rooms/</span>
            </div>
            </Link>
            </FadeIn>
        </div>
    )
}

export default Home

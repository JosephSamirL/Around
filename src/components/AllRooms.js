import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import {database} from "../store/firebase"
import FadeIn from "react-fade-in"
import {Link} from "react-router-dom"
function AllRooms() {
    const [posts, setPosts] = useState(false)
    const colors = ["bg-red-500", "bg-blue-500", "bg-gray-300", "bg-pink-500","bg-green-500", "bg-indigo-500"  ]
    useEffect(() => {
        var starCountRef = database.ref('posts/');
starCountRef.on('value', (snapshot) => {
  const data = snapshot.val();
  setPosts(data);
});
    }, [])
    
    return (
        <div style={{backgroundColor:"#212121"}} className="w-screen h-screen overflow-scroll ">
        <Navbar/>
        <div  className=" h-screen overflow-auto" >
        {posts&&Object.keys(posts).map((key,index)=><FadeIn key={key}><Link to={"/room/"+key}><div  className={`mx-auto ${colors[Math.floor(Math.random()*6)]} h-52 w-5/6 py-11 mb-5 rounded-xl `}>
                    <span className="text-xl font-semibold text-gray-900 ml-10 "><span>Room: </span>{posts[key].title}<br></br><span className="mt-auto ml-3 text-gray-700">Author: </span>{posts[key].author}</span>
                            </div></Link></FadeIn>)}
                            </div>

    </div>
    )
}

export default AllRooms

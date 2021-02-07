import React,{useEffect, useState} from 'react'
import Navbar from './Navbar'
import {Link} from "react-router-dom"
import { useStore } from '../store/store';
import {database} from "../store/firebase"
import FadeIn from 'react-fade-in';

function MyRooms() {
    const {user} = useStore()
    const [posts, setPosts] = useState(false)
    const colors = ["bg-red-500", "bg-blue-500", "bg-gray-300", "bg-pink-500","bg-green-500", "bg-indigo-500"  ]
    useEffect(() => {
        var starCountRef = database.ref('user-posts/' + user.displayName + '/');
starCountRef.on('value', (snapshot) => {
  const data = snapshot.val();
  setPosts(data);
});
    }, [])
   
    function writeNewPost( username, title, ) {
        // A post entry.
        var postData = {
          author: username,
          title: title,
          starCount: 0,
        };
      
        // Get a key for a new Post.
        var newPostKey = database.ref().child('posts').push().key;
      
        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates['/posts/' + "m" + newPostKey] = postData;
        updates['/user-posts/' + user.displayName + '/' + "m" +newPostKey] = postData;
      
        return database.ref().update(updates);
      }
      const handleClick = ()=>{
          const name = prompt("please choose room name");
          if(name){
          writeNewPost(user.displayName,name)
          }
      }
   
    return (
        <div style={{backgroundColor:"#212121",}} className="w-screen h-screen overflow-scroll">
        
            <Navbar/>
            
            <div style={{height:"84.6%"}} className=" overflow-auto" >
            {posts&&Object.keys(posts).map((key,index)=><FadeIn key={key}><Link to={"/room/"+ key}><div  className={`mx-auto ${colors[Math.floor(Math.random()*6)]} h-52 w-5/6 py-11 mb-5 rounded-xl `}>
                    <span className="text-xl font-semibold text-gray-900 ml-10 "><span>Room: </span>{posts[key].title}<br></br><span className="mt-auto ml-3 text-gray-700">Author: </span>{posts[key].author}</span>
                            </div></Link></FadeIn>)}
                            </div>
            <div className=" text-center absolute bottom-0 w-screen">
            <button style={{backgroundColor:"#212121"}} onClick={()=>{handleClick()}} className="p-3 text-xl shadow-2xl  text-white w-screen ">Add Chat Room</button>
            </div>
        </div>
    )
}

export default MyRooms

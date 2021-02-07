
import React,{useEffect, useRef, useState} from 'react'
import Navbar from './Navbar'
import { useStore } from '../store/store';
import {database} from "../store/firebase"
import FadeIn from 'react-fade-in';
import {useHistory, useParams} from "react-router-dom"

function ChatRoom() {
    const [text, setText] = useState("")
   const chat = useRef()
    let clicked= false;
    const {id} = useParams()
    const {user} = useStore()
    const [posts, setPosts] = useState(false)
    const [owner,setOwner] = useState(false)
    const history = useHistory()
    useEffect(() => {
        var starCountRef = database.ref('posts/' + id +"/");
starCountRef.on('value', (snapshot) => {
  const data = snapshot.val();
  setPosts(data);
});
    }, [clicked])
    useEffect(() => {
      posts&&Object.keys(posts).map((key,index)=>{
             if(posts[key].author === user.displayName){
               setOwner(true)
           
             }
             
      })
    }, )
    function writeNewPost( username, text, ) {
        // A post entry.
        var postData = {
          author: username,
          text: text,
        
        };
      
        // Get a key for a new Post.
        var newPostKey = database.ref().child('posts').push().key;
      
        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates['/posts/'  + id +"/"+ newPostKey] = postData;
        return database.ref().update(updates);
      }
      function scrollToMyRef() {
        const scroll = chat.current.scrollHeight - chat.current.clientHeight;
        chat.current.scrollTo(0, (scroll+38));
        
      };
      
     console.log(user)
    return (
        <div style={{backgroundColor:"#212121"}} className="w-screen h-screen overflow-scroll ">
            <Navbar/>
            <div ref={chat} style={{height:"82.6%"}} className="text-white overflow-auto">
            {posts&&Object.keys(posts).map((key,index)=><FadeIn key={key}>{posts[key].author&&<h1 style={{overflowWrap:"break-word"}} className={user.displayName===posts[key].author?"bg-green-500 w-11/12  mx-auto mb-3 p-1 rounded-xl":"bg-purple-500 w-11/12  mx-auto mb-3 p-1 rounded-xl"}>{posts[key].author}: {posts[key].text}</h1>}</FadeIn>)}
            {window.scrollTo(0,document.body.scrollHeight)}
          
            </div>
            <div style={{backgroundColor:"#212121"}} className=" py-4  w-screen text-center absolute bottom-0">
                <input value={text} onChange={(e)=>setText(e.target.value)} className=" mb-1 h-7 p-5 w-4/6 rounded-lg"></input><button onClick={()=>{writeNewPost(user.displayName,text); clicked = !clicked; scrollToMyRef(); setText("")}} className="text-white  h-9 rounded-lg  w-1/6">send</button>
            </div>
            
            
        </div>
    )
}

export default ChatRoom

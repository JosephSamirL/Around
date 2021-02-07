
import React, { useLayoutEffect, useState, useEffect } from 'react';
import Login from "./components/Login"
import Home from "./components/Home"
import {authh} from "./store/firebase"
import {useStore} from "./store/store"
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import MyRooms from './components/MyRooms';
import AllRooms from './components/AllRooms';
import ChatRoom from './components/ChatRoom';

function App() {
  const {user, loading, setUser, setLoading,} = useStore()
  useEffect(() => {
    const unsubscribe = authh.onAuthStateChanged(user => {
      setUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])
  if(loading){
    return(<div className="bg-gray-900 w-screen h-screen py-60">
      <div className="text-center">
      <CircularProgress style={{margin:"auto"}}/>
      </div>
    </div>)
  }
  return (
   <Router>
    {!user?<Switch>
      <Route exact path="/login">
        <Login/>
        </Route>
        <Route render={()=><Redirect to="/login"/>}/>
        </Switch>:
        <Switch>
           
  <Route exact path="/" component={Home}/>
  <Route exact path="/myrooms/" component={MyRooms}/>
  <Route exact path="/allrooms" component={AllRooms}/>
  <Route  path="/room/:id" component={ChatRoom}/>
  <Route render={()=><Redirect to="/"/>}/>
  </Switch>}
  </Router>
  );
                }
              

export default App;

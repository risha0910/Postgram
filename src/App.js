import logo from './logo.svg';
import './App.css';
import React from 'react'
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import PostList from './PostList'
import AddPost from './AddPost'
import EditPost from './EditPost';
import PostItem from './PostItem';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  return (
    <>
    <div className="App">
      <h1 style={{background:'black' , color:'white'}}>Postgram</h1>
     
    
       <Switch>
       <Route path= '/' component={PostList} exact/>
       <Route path= '/addpost' component={AddPost} exact/>
       <Route path= '/editpost/:postid' component={EditPost} exact/> 
       {/* here postid is theparameter since colon represents the parameter */}
       <Route path= '/postitem' component={PostItem} exact/>
    </Switch>
      
    </div>
    </>
  );
}
export default App;

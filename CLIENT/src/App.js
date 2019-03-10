import React, { Component } from 'react';
import Register from './Register'
import Login from './Login'
import AdminComp from './AdminComp'
import NavBarNPM from 'reactjs-navigation'
import { Link } from 'react-router-dom'
import {
  BrowserRouter as Router,
	Route
} from 'react-router-dom'
import Logout from './Logout';


class App extends Component {

  state = {
    isLoggedIn:false
  }
  componentDidMount(){
      var token = localStorage.getItem('authToken')
      token ? this.setState({isLoggedIn:true}) : null
  }
  isLoggedIn = (bool) => {
      this.setState({isLoggedIn:bool})
  }
  
  render() {
    let { isLoggedIn } = this.state 
    return (
      <Router>
      <div>
      <NavBarNPM 
          pages = {isLoggedIn ? ['logout', 'admin'] : ['login', 'register']}
        />
        
        <Route 
          path =  '/register' 
          component = {Register}
        />
        <Route 
          path =  '/login' 
          render = {
            () =>(
              <Login isLoggedIn = {this.isLoggedIn} />
            )
          } 
        />
        <Route 
          path =  '/admin' 
          component = {AdminComp}  // create a name component. This ish
        />
          <Route 
          path =  '/logout'
          render = {
            () =>(
              <Logout isLoggedIn = {this.isLoggedIn} />
            )
          } 
        />
      </div>
      </Router>
      
    );
  }
}

export default App;

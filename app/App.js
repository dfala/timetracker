import React from 'react'
import Router from 'react-router'
var { Route, DefaultRoute, RouteHandler, Link } = Router;
import dispatcher from './dispatcher.js'

import Header from './Header'
import LoginField from './login/Login'
import FocusInput from './focusinput/FocusInput'
import LogList from './loglist/LogList'


// Main app
const App = React.createClass({
  getInitialState () {
    return {
      user: null
    }
  },

  getUserData (user) {
    dispatcher.saveUser(user);
    this.setState({
      user: user
    })
  },

  render () {
    return (
      <div>
        <Header />
        { 
          this.state.user ?
          // display focus
          <div className="container align-middle">
            <div className="row" id="main-row">
              <FocusInput value="What's your focus today?" userInfo={this.state.user} />
              <LogList userInfo={this.state.user} />
            </div>
          </div>
          : 
          // display login
          <LoginField getUser={this.getUserData}/>
        }
      </div>
    )
  }
});


// ROUTES
// var routes = (
//   <Route handler={Login} path="/" name="Login" />
// );

// Router.run(routes, function (Handler) {
//   React.render(<Handler/>, document.getElementById('app'));
// });

React.render(
  <App/>,
  document.getElementById('app')
)
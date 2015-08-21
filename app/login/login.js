import React from 'react'
import axios from 'axios'

const Login = React.createClass({
  login() {
    var username = document.getElementsByClassName('focus-box')[0].value;
    let loginInfo = this;

    var uri = '/api/get-user/' + username;
    axios.get(uri)
    .then(function (response) {
      var data = {
        username: username,
        logs: response.data
      }
      loginInfo.props.getUser(data);
    })
    .catch(function (err) {
      console.error(err);
    })

  },

  render () {
    return (
      <div className="container">
        <div className="lc">
          <input placeholder="Username" className="focus-box" />
          <button className="btn btn-default btn-clock" onClick={this.login}>
            Login
          </button>
        </div>
      </div>
    )
  }
})

module.exports = Login;
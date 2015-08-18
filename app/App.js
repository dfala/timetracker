import React from 'react'
import Header from './Header'
import FocusInput from './FocusInput'


const App = React.createClass({
  render () {
    var styles = {
      alignMiddle: {
        textAlign: 'center'
      }
    };
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row" id="main-row" style={styles.alignMiddle}>
            <FocusInput value="What's your focus today?"/>
          </div>
        </div>
      </div>
    )
  }
});

React.render(
  <App/>,
  document.getElementById('app')
)
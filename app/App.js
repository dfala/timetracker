import React from 'react'
import Header from './Header'
import FocusInput from './FocusInput'


let App = React.createClass({
  render: function(){
    var styles = {
      alignMiddle: {
        textAlign: 'center'
      }
    };
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row" style={styles.alignMiddle}>
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
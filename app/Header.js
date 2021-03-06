import React from 'react'

let Header = React.createClass({
  render: function(){
    var styles = {
      header: {
        backgroundColor: '#fff',
        boxShadow: '0px 0px 10px -3px #000',
        width: '100%',
        height: '65px',
        color: '#393939',
        position: 'fixed',
        top: '0',
        left: '0',
        display: 'flex',
        alignItems: 'center',
        padding: '0 40px',
        zIndex: '999'
      },
      noSpace: {
        padding: '0',
        margin: '0'
      }
    };
    return (
      <div style={styles.header}>
        <h3 style={styles.noSpace}>
          TimeTracker
        </h3>
      </div>
    )
  }
});


module.exports = Header;
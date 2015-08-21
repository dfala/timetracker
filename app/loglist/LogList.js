import React from 'react'
import moment from 'moment'

let LogList = React.createClass({
  render () {
    return (
      <div>
        {
          this.props.userInfo.logs.length ?
          <div className="lc extra-top">
            <h1>
              {this.props.userInfo.logs.map(function (log) {
                return (
                  <div>
                    <h4>{log.workType}</h4>
                    <p>{moment(log.startDate).format('lll')}</p>
                    <p>{moment(log.endDate).format('lll')}</p>
                    <hr/>
                  </div>
                )
              })}
            </h1>
          </div> :<div></div>
        }
      </div>
    )
  }
})

module.exports = LogList;
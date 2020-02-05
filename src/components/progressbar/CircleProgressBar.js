import React, { Component } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

class CircleProgressbar extends Component {
  render() {
    return (
      <div>
        <h6>{this.props.content}</h6>
        <CircularProgressbar
          value={this.props.percentage}
          text={this.props.percentage + '%'}
          styles={buildStyles({
            // Colors
            pathColor: '#17465a',
            textColor: '#17465a'
          })}
        />
      </div>
    )
  }
}

export default CircleProgressbar

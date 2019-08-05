import React, { Component } from 'react';

class ProgressBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      percentage: this.props.percentage
    }
  }
  render() {
    return (
      <div className="my-3">
        <span>{this.props.content}</span>
        <div className="progress rounded-pill">
          <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ "maxWidth": this.state.percentage + "%" }}>
            <span className="title">{this.state.percentage + "%"}</span>
          </div>
        </div>
      </div>
    )
  }
}


export default ProgressBar;
import React, { Component } from 'react'

export default class Joke extends Component {
  render() {
    return (
      <div className="flex justify-between w-full border">
        <div className="flex flex-row">
          <p>👍</p>
          <p>{this.props.score}</p>
          <p>👎</p>
        </div>
        <p>{this.props.joke}</p>
        {this.props.score > 0 && <p>😂</p>}
        {this.props.score === 0 && <p>😐</p>}
        {this.props.score < 0 && <p>😡</p>}
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Joke extends Component {
  render() {
    return (
      <div className="flex justify-between w-full">
        <div className="flex flex-row">
          <p>👍</p>
          <p>⚪</p>
          <p>👎</p>
        </div>
        <p>joke</p>
        <p>😐</p>
      </div>
    )
  }
}

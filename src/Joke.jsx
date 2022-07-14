import React, { Component } from 'react'

const emojis = ['😡', '😐', '😂']

export default class Joke extends Component {
  render() {
    return (
      <div className="flex justify-between items-center pl-4 pr-2 w-full border-b h-16">
        <div className="flex flex-row items-center">
          <p>👍</p>
          <div className="flex justify-center items-center rounded-full border-2 w-10 h-10 min-w-fit p-3 m-2 shadow-lg">
            <p>{this.props.score}</p>
          </div>
          <p>👎</p>
        </div>
        <p>{this.props.joke}</p>
        <p className="text-4xl">
          {this.props.score > 0 && emojis[2]}
          {this.props.score === 0 && emojis[1]}
          {this.props.score < 0 && emojis[0]}
        </p>
      </div>
    )
  }
}

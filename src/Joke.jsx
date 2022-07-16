import React, { Component } from 'react'

const emojis = ['😠', '😐', '🙂', '😀', '😆', '😂']

export default class Joke extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="flex justify-between items-center pl-6 pr-2 py-1 min-w-full border-b last:border-none">
        <div className="flex flex-row items-center">
          <button onClick={this.props.upvote} id="upvote">
            👍
          </button>
          <div className="flex justify-center items-center rounded-full border-2 w-10 h-10 min-w-fit p-3 m-2 shadow-lg">
            <span>{this.props.score}</span>
          </div>
          <button onClick={this.props.downvote} id="downvote">
            👎
          </button>
        </div>
        <p className="mx-6 mr-auto pr-6 py-4">{this.props.joke}</p>
        <p className="text-4xl">
          {this.props.score > 0 && emojis[2]}
          {this.props.score === 0 && emojis[1]}
          {this.props.score < 0 && emojis[0]}
        </p>
      </div>
    )
  }
}

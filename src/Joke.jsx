import React, { Component } from 'react'

import { BsHandThumbsDownFill } from 'react-icons/bs'
import { BsHandThumbsUpFill } from 'react-icons/bs'

const emojis = ['😠', '😐', '🙂', '😀', '😆', '😂']

export default class Joke extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="flex justify-between items-center pl-6 pr-4 py-2 min-w-full gap-6 border-b last:border-none">
        <div className="flex flex-row items-center">
          <button onClick={this.props.upvote}>
            <BsHandThumbsUpFill className="text-[#ffd764] hover:text-[#e7bd3d]" />
          </button>
          <div className="flex justify-center items-center rounded-full border-2 h-10 w-fit p-3 m-2 shadow-lg">
            <span>{this.props.score}</span>
          </div>
          <button onClick={this.props.downvote}>
            <BsHandThumbsDownFill className="text-[#ffd764] hover:text-[#e7bd3d]" />
          </button>
        </div>
        <p className="mr-auto py-4">{this.props.joke}</p>
        <div>
          <i className="em em-rolling_on_the_floor_laughing text-3xl shadow-lg rounded-full" />
        </div>
      </div>
    )
  }
}

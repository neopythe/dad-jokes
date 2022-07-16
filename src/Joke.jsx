import React, { Component } from 'react'
import { BsHandThumbsDownFill } from 'react-icons/bs'
import { BsHandThumbsUpFill } from 'react-icons/bs'

export default class Joke extends Component {
  constructor(props) {
    super(props)
  }

  getColour() {
    const { score } = this.props
    if (score >= 15) return '#22C55E'
    if (score >= 10) return '#6CCB60'
    if (score >= 5) return '#B5D162'
    if (score > -5) return '#ffd764'
    if (score > -10) return '#FFAC43'
    if (score > -15) return '#FF8021'
    if (score <= -15) return '#FF5500'
  }

  getEmoji() {
    const { score } = this.props
    if (score >= 15) return 'rolling_on_the_floor_laughing'
    if (score >= 10) return 'smiley'
    if (score >= 5) return 'slightly_smiling_face'
    if (score > -5) return 'no_mouth'
    if (score > -10) return 'disappointed_relieved'
    if (score > -15) return 'angry'
    if (score <= -15) return 'face_with_symbols_on_mouth'
  }

  render() {
    return (
      <div className="flex justify-between items-center pl-6 pr-4 py-2 min-w-full gap-6 border-b last:border-none">
        <div className="flex flex-row items-center">
          <button onClick={this.props.upvote}>
            <BsHandThumbsUpFill className="text-[#ffd764] hover:text-[#e7bd3d]" />
          </button>
          <div
            style={{ borderColor: this.getColour() }}
            className="flex justify-center items-center rounded-full border-2 h-10 w-10 p-3 m-2 shadow-lg"
          >
            <span>{this.props.score}</span>
          </div>
          <button onClick={this.props.downvote}>
            <BsHandThumbsDownFill className="text-[#ffd764] hover:text-[#e7bd3d]" />
          </button>
        </div>
        <p className="mr-auto py-4">{this.props.joke}</p>
        <div className="w-fit h-fit rounded-full shadow-lg">
          <i className={`em em-${this.getEmoji()} text-3xl`} />
        </div>
      </div>
    )
  }
}

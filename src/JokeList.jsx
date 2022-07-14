import React, { Component } from 'react'
import axios from 'axios'

import Joke from './Joke'

const API_URL = 'https://icanhazdadjoke.com/'

export default class JokeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jokes: [
        { id: 0, joke: 'funny', score: 5 },
        { id: 1, joke: 'meh', score: 0 },
        { id: 2, joke: 'awful', score: -1 },
      ],
    }
    this.fetchJoke = this.fetchJoke.bind(this)
    this.vote = this.vote.bind(this)
  }

  async fetchJoke() {
    const {
      data: { id, joke, status },
    } = await axios.get(API_URL, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'https://github.com/neopythe/dad-jokes',
      },
    })
    this.setState({ jokes: [...this.state.jokes, { id, joke, score: 0 }] })
  }

  vote() {}

  render() {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-50">
        <header className="flex flex-col items-center justify-center gap-8 w-[300px] h-[600px] bg-green-500 shadow-xl">
          <h1 className="text-4xl font-bold text-white">
            Dad <span className="font-thin">Jokes</span>
          </h1>
          <div className="flex justify-center items-center rounded-full shadow-2xl pb-6 pt-4 px-1 w-fit h-fit">
            <p className="text-8xl">😂</p>
          </div>
          <button onClick={this.fetchJoke} className="btn lowercase">
            new jokes
          </button>
        </header>
        <ul className="flex flex-col justify-center items-center h-[550px] w-[700px] bg-slate-100 shadow-xl ">
          {this.state.jokes &&
            this.state.jokes.map((joke, index) => (
              <Joke
                key={joke.id}
                joke={joke.joke}
                score={joke.score}
                vote={this.vote}
              />
            ))}
        </ul>
      </div>
    )
  }
}

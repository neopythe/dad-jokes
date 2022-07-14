import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Joke from './Joke'

const API_URL = 'https://icanhazdadjoke.com/'

const Ul = styled.ul`
  scrollbar-width: thin;
`

export default class JokeList extends Component {
  static defaultProps = {
    jokesPerGet: 5,
  }

  constructor(props) {
    super(props)
    this.state = {
      jokes: [],
    }
    this.fetchJokes = this.fetchJokes.bind(this)
    this.vote = this.vote.bind(this)
  }

  async fetchJokes() {
    const newJokes = []
    let promises = []

    while (newJokes.length < this.props.jokesPerGet) {
      while (promises.length < this.props.jokesPerGet) {
        promises.push(
          axios.get(API_URL, {
            headers: {
              Accept: 'application/json',
              'User-Agent': 'https://github.com/neopythe/dad-jokes',
            },
          })
        )
      }

      const response = await Promise.all(promises)
      response.forEach(({ data: { id, joke, success } }) => {
        !newJokes.includes(joke) &&
          !this.state.jokes.includes(joke) &&
          newJokes.push(joke)
      })
      promises = []
    }

    this.setState({ jokes: [...this.state.jokes, ...newJokes] })
  }

  vote() {}

  render() {
    return (
      <main className="flex items-center w-4/5 h-4/5">
        <header className="flex flex-col items-center justify-center gap-10 w-1/3 min-w-[300px] h-full bg-green-500 shadow-xl">
          <h1 className="text-5xl font-bold text-white">
            Dad <span className="font-thin">Jokes</span>
          </h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            className="w-3/5 rounded-full p-2 border-2 border-white shadow-2xl"
          />
          <button
            onClick={this.fetchJokes}
            className="btn btn-info text-white rounded-full border-2 border-white lowercase shadow-xl text-sm font-normal px-12"
          >
            new&nbsp;<span className="font-semibold">jokes</span>
          </button>
        </header>
        <Ul className="flex flex-col justify-center items-center h-[90%] w-full min-w-[600px] bg-slate-100 shadow-xl overflow-y-auto">
          {this.state.jokes &&
            this.state.jokes.map((joke, index) => (
              <Joke joke={joke} key={joke} score={0} />
            ))}
        </Ul>
      </main>
    )
  }
}

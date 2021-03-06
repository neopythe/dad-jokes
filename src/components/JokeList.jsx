import React, { Component } from 'react'
import axios from 'axios'
import FlipMove from 'react-flip-move'

import { Logo, StyledUl } from './styles/JokeList.styled'

import Joke from './Joke'
import LoadingSpinner from './LoadingSpinner'

const API_URL = 'https://icanhazdadjoke.com/'

export default class JokeList extends Component {
  static defaultProps = {
    jokesPerGet: 5,
  }

  constructor(props) {
    super(props)
    this.state = {
      jokes: JSON.parse(localStorage.getItem('jokes')) ?? [],
      loading: false,
    }
    this.seenJokes = new Set(this.state.jokes.map((joke) => joke.id))
    this.handleClick = this.handleClick.bind(this)
    this.handleVote = this.handleVote.bind(this)
  }

  componentDidMount() {
    !this.state.jokes.length &&
      this.setState({ loading: true }, this.fetchJokes)
  }

  async fetchJokes() {
    try {
      const newJokes = []
      let promises = []

      while (newJokes.length < this.props.jokesPerGet) {
        while (promises.length < this.props.jokesPerGet) {
          promises.push(
            axios.get(API_URL, {
              headers: {
                Accept: 'application/json',
              },
            })
          )
        }

        const response = await Promise.all(promises)
        response.forEach(({ data: { id, joke, success } }) => {
          !newJokes.find((joke) => joke.id === id) &&
            !this.seenJokes.has(id) &&
            newJokes.push({ id, joke, score: 0 }) &&
            this.seenJokes.add(id)
        })
        promises = []
      }

      this.setState(
        {
          jokes: [...this.state.jokes, ...newJokes],
          loading: false,
        },
        () => localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
      )
    } catch (err) {
      this.setState({ loading: false })
      alert(err)
    }
  }

  handleClick() {
    this.setState({ loading: true }, this.fetchJokes)
  }

  handleVote(id, delta) {
    this.setState(
      (state) => ({
        jokes: state.jokes.map((joke) =>
          joke.id === id ? { ...joke, score: joke.score + delta } : joke
        ),
      }),
      () => localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
    )
  }

  render() {
    return (
      <main className="flex items-center w-4/5 h-4/5 select-none">
        <header className="flex flex-col items-center justify-center gap-10 w-1/3 min-w-[300px] h-full bg-green-500 shadow-xl">
          <h1 className="text-5xl font-bold text-white">
            Dad <span className="font-thin">Jokes</span>
          </h1>
          <Logo
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            className="w-3/5 rounded-full p-2 border-2 border-white shadow-2xl"
          />
          <button
            onClick={this.handleClick}
            className="btn btn-info hover:bg-[#00b4dc] hover:border-white text-white rounded-full border-2 border-white lowercase shadow-xl text-sm font-normal px-12"
          >
            new&nbsp;<span className="font-semibold">jokes</span>
          </button>
        </header>
        <StyledUl className="flex flex-col items-center h-[90%] w-full min-w-[600px] bg-slate-100 shadow-xl overflow-y-auto">
          {this.state.loading && <LoadingSpinner />}
          {!this.state.loading && (
            <FlipMove className="w-full">
              {this.state.jokes &&
                this.state.jokes
                  .sort((a, b) => b.score - a.score)
                  .map((joke) => (
                    <Joke
                      key={joke.id}
                      id={joke.id}
                      joke={joke.joke}
                      score={joke.score}
                      upvote={() => this.handleVote(joke.id, 1)}
                      downvote={() => this.handleVote(joke.id, -1)}
                    />
                  ))}
            </FlipMove>
          )}
        </StyledUl>
      </main>
    )
  }
}
